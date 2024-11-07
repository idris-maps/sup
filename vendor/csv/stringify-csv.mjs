// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const QUOTE = '"';
const LF = "\n";
const CRLF = "\r\n";
const BYTE_ORDER_MARK = "\ufeff";
function getEscapedString(value, sep) {
    if (value === undefined || value === null) return "";
    let str = "";
    if (typeof value === "object") str = JSON.stringify(value);
    else str = String(value);
    if (str.includes(sep) || str.includes(LF) || str.includes(QUOTE)) {
        return `${QUOTE}${str.replaceAll(QUOTE, `${QUOTE}${QUOTE}`)}${QUOTE}`;
    }
    return str;
}
function normalizeColumn(column) {
    let header, prop;
    if (typeof column === "object") {
        if (Array.isArray(column)) {
            header = String(column[column.length - 1]);
            prop = column;
        } else {
            prop = Array.isArray(column.prop) ? column.prop : [
                column.prop
            ];
            header = typeof column.header === "string" ? column.header : String(prop[prop.length - 1]);
        }
    } else {
        header = String(column);
        prop = [
            column
        ];
    }
    return {
        header,
        prop
    };
}
class StringifyError extends Error {
    constructor(message){
        super(message);
        this.name = "StringifyError";
    }
}
function getValuesFromItem(item, normalizedColumns) {
    const values = [];
    if (normalizedColumns.length) {
        for (const column of normalizedColumns){
            let value = item;
            for (const prop of column.prop){
                if (typeof value !== "object" || value === null) continue;
                if (Array.isArray(value)) {
                    if (typeof prop === "number") value = value[prop];
                    else {
                        throw new StringifyError('Property accessor is not of type "number"');
                    }
                } else value = value[prop];
            }
            values.push(value);
        }
    } else {
        if (Array.isArray(item)) {
            values.push(...item);
        } else if (typeof item === "object") {
            throw new StringifyError("No property accessor function was provided for object");
        } else {
            values.push(item);
        }
    }
    return values;
}
function stringify(data, { headers = true, separator: sep = ",", columns = [], bom = false } = {}) {
    if (sep.includes(QUOTE) || sep.includes(CRLF)) {
        const message = [
            "Separator cannot include the following strings:",
            '  - U+0022: Quotation mark (")',
            "  - U+000D U+000A: Carriage Return + Line Feed (\\r\\n)"
        ].join("\n");
        throw new StringifyError(message);
    }
    const normalizedColumns = columns.map(normalizeColumn);
    let output = "";
    if (bom) {
        output += BYTE_ORDER_MARK;
    }
    if (headers) {
        output += normalizedColumns.map((column)=>getEscapedString(column.header, sep)).join(sep);
        output += CRLF;
    }
    for (const item of data){
        const values = getValuesFromItem(item, normalizedColumns);
        output += values.map((value)=>getEscapedString(value, sep)).join(sep);
        output += CRLF;
    }
    return output;
}
export { StringifyError as StringifyError };
export { stringify as stringify };

