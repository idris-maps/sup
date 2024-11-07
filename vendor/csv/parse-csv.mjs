// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class AssertionError extends Error {
    constructor(message){
        super(message);
        this.name = "AssertionError";
    }
}
function assert(expr, msg = "") {
    if (!expr) {
        throw new AssertionError(msg);
    }
}
class ParseError extends SyntaxError {
    startLine;
    line;
    column;
    constructor(start, line, column, message){
        super();
        this.startLine = start;
        this.column = column;
        this.line = line;
        if (message === ERR_FIELD_COUNT) {
            this.message = `record on line ${line}: ${message}`;
        } else if (start !== line) {
            this.message = `record on line ${start}; parse error on line ${line}, column ${column}: ${message}`;
        } else {
            this.message = `parse error on line ${line}, column ${column}: ${message}`;
        }
    }
}
const ERR_BARE_QUOTE = 'bare " in non-quoted-field';
const ERR_QUOTE = 'extraneous or missing " in quoted-field';
const ERR_INVALID_DELIM = "Invalid Delimiter";
const ERR_FIELD_COUNT = "wrong number of fields";
function convertRowToObject(row, headers, index) {
    if (row.length !== headers.length) {
        throw new Error(`Error number of fields line: ${index}\nNumber of fields found: ${headers.length}\nExpected number of fields: ${row.length}`);
    }
    const out = {};
    for (const [index, header] of headers.entries()){
        out[header] = row[index];
    }
    return out;
}
export { ParseError as ParseError };
const BYTE_ORDER_MARK = "\ufeff";
class Parser {
    #input = "";
    #cursor = 0;
    #options;
    constructor({ separator = ",", trimLeadingSpace = false, comment, lazyQuotes, fieldsPerRecord } = {}){
        this.#options = {
            separator,
            trimLeadingSpace,
            comment,
            lazyQuotes,
            fieldsPerRecord
        };
    }
    #readLine() {
        if (this.#isEOF()) return null;
        if (!this.#input.startsWith("\r\n", this.#cursor) || !this.#input.startsWith("\n", this.#cursor)) {
            let buffer = "";
            let hadNewline = false;
            while(this.#cursor < this.#input.length){
                if (this.#input.startsWith("\r\n", this.#cursor)) {
                    hadNewline = true;
                    this.#cursor += 2;
                    break;
                }
                if (this.#input.startsWith("\n", this.#cursor)) {
                    hadNewline = true;
                    this.#cursor += 1;
                    break;
                }
                buffer += this.#input[this.#cursor];
                this.#cursor += 1;
            }
            if (!hadNewline && buffer.endsWith("\r")) {
                buffer = buffer.slice(0, -1);
            }
            return buffer;
        }
        return null;
    }
    #isEOF() {
        return this.#cursor >= this.#input.length;
    }
    #parseRecord(startLine) {
        let line = this.#readLine();
        if (line === null) return null;
        if (line.length === 0) {
            return [];
        }
        function runeCount(s) {
            return Array.from(s).length;
        }
        let lineIndex = startLine + 1;
        if (this.#options.comment && line[0] === this.#options.comment) {
            return [];
        }
        let fullLine = line;
        let quoteError = null;
        const quote = '"';
        const quoteLen = quote.length;
        const separatorLen = this.#options.separator.length;
        let recordBuffer = "";
        const fieldIndexes = [];
        parseField: for(;;){
            if (this.#options.trimLeadingSpace) {
                line = line.trimStart();
            }
            if (line.length === 0 || !line.startsWith(quote)) {
                const i = line.indexOf(this.#options.separator);
                let field = line;
                if (i >= 0) {
                    field = field.substring(0, i);
                }
                if (!this.#options.lazyQuotes) {
                    const j = field.indexOf(quote);
                    if (j >= 0) {
                        const col = runeCount(fullLine.slice(0, fullLine.length - line.slice(j).length));
                        quoteError = new ParseError(startLine + 1, lineIndex, col, ERR_BARE_QUOTE);
                        break parseField;
                    }
                }
                recordBuffer += field;
                fieldIndexes.push(recordBuffer.length);
                if (i >= 0) {
                    line = line.substring(i + separatorLen);
                    continue parseField;
                }
                break parseField;
            } else {
                line = line.substring(quoteLen);
                for(;;){
                    const i = line.indexOf(quote);
                    if (i >= 0) {
                        recordBuffer += line.substring(0, i);
                        line = line.substring(i + quoteLen);
                        if (line.startsWith(quote)) {
                            recordBuffer += quote;
                            line = line.substring(quoteLen);
                        } else if (line.startsWith(this.#options.separator)) {
                            line = line.substring(separatorLen);
                            fieldIndexes.push(recordBuffer.length);
                            continue parseField;
                        } else if (0 === line.length) {
                            fieldIndexes.push(recordBuffer.length);
                            break parseField;
                        } else if (this.#options.lazyQuotes) {
                            recordBuffer += quote;
                        } else {
                            const col = runeCount(fullLine.slice(0, fullLine.length - line.length - quoteLen));
                            quoteError = new ParseError(startLine + 1, lineIndex, col, ERR_QUOTE);
                            break parseField;
                        }
                    } else if (line.length > 0 || !this.#isEOF()) {
                        recordBuffer += line;
                        const r = this.#readLine();
                        lineIndex++;
                        line = r ?? "";
                        fullLine = line;
                        if (r === null) {
                            if (!this.#options.lazyQuotes) {
                                const col = runeCount(fullLine);
                                quoteError = new ParseError(startLine + 1, lineIndex, col, ERR_QUOTE);
                                break parseField;
                            }
                            fieldIndexes.push(recordBuffer.length);
                            break parseField;
                        }
                        recordBuffer += "\n";
                    } else {
                        if (!this.#options.lazyQuotes) {
                            const col = runeCount(fullLine);
                            quoteError = new ParseError(startLine + 1, lineIndex, col, ERR_QUOTE);
                            break parseField;
                        }
                        fieldIndexes.push(recordBuffer.length);
                        break parseField;
                    }
                }
            }
        }
        if (quoteError) {
            throw quoteError;
        }
        const result = [];
        let preIdx = 0;
        for (const i of fieldIndexes){
            result.push(recordBuffer.slice(preIdx, i));
            preIdx = i;
        }
        return result;
    }
    parse(input) {
        this.#input = input.startsWith(BYTE_ORDER_MARK) ? input.slice(1) : input;
        this.#cursor = 0;
        const result = [];
        let _nbFields;
        let lineResult;
        let first = true;
        let lineIndex = 0;
        const INVALID_RUNE = [
            "\r",
            "\n",
            '"'
        ];
        const options = this.#options;
        if (INVALID_RUNE.includes(options.separator) || typeof options.comment === "string" && INVALID_RUNE.includes(options.comment) || options.separator === options.comment) {
            throw new Error(ERR_INVALID_DELIM);
        }
        for(;;){
            const r = this.#parseRecord(lineIndex);
            if (r === null) break;
            lineResult = r;
            lineIndex++;
            if (first) {
                first = false;
                if (options.fieldsPerRecord !== undefined) {
                    if (options.fieldsPerRecord === 0) {
                        _nbFields = lineResult.length;
                    } else {
                        _nbFields = options.fieldsPerRecord;
                    }
                }
            }
            if (lineResult.length > 0) {
                if (_nbFields && _nbFields !== lineResult.length) {
                    throw new ParseError(lineIndex, lineIndex, null, ERR_FIELD_COUNT);
                }
                result.push(lineResult);
            }
        }
        return result;
    }
}
function parse(input, opt = {
    skipFirstRow: false
}) {
    const parser = new Parser(opt);
    const r = parser.parse(input);
    if (opt.skipFirstRow || opt.columns) {
        let headers = [];
        if (opt.skipFirstRow) {
            const head = r.shift();
            assert(head !== undefined);
            headers = head;
        }
        if (opt.columns) {
            headers = opt.columns;
        }
        const firstLineIndex = opt.skipFirstRow ? 1 : 0;
        return r.map((row, i)=>{
            return convertRowToObject(row, headers, firstLineIndex + i);
        });
    }
    return r;
}
export { parse as parse };

