// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const links = {
    "->": "solid",
    "..>": "dotted",
    "-->": "dashed"
};
const readLines = function*(d) {
    for (const line of d.split("\n")){
        const l = line.trim();
        if (l !== "") {
            yield l;
        }
    }
};
const removeComments = function*(g) {
    for (const line of g){
        if (!line.startsWith("# ")) {
            yield line;
        }
    }
};
const getLink = (d)=>{
    const values = Object.entries(links).sort((a, b)=>a[0].length > b[0].length ? -1 : 1);
    return values.find(([link])=>d.includes(link)) || [];
};
const getParticipant = (d)=>{
    if (d.includes("[") && d.includes("]") && d.indexOf("[") < d.indexOf("]")) {
        const [key, v] = d.split("[");
        const [value] = v.split("]");
        const tKey = key.trim();
        const tValue = value.trim();
        if (tKey !== "" && tValue !== "") {
            return {
                key: tKey,
                value: tValue
            };
        }
    }
    return {
        key: d.trim()
    };
};
const parseLine = function*(g) {
    for (const line of g){
        const [seq, label] = line.split(":");
        const [symbol, link] = getLink(seq);
        if (symbol) {
            const [f, t] = seq.split(symbol);
            yield {
                from: getParticipant(f),
                to: getParticipant(t),
                link,
                label
            };
        } else {
            yield {
                from: getParticipant(seq),
                label
            };
        }
    }
};
const parseDsl = (d)=>{
    const participantMap = new Map();
    const sequences = [];
    const lines = parseLine(removeComments(readLines(d)));
    for (const d of lines){
        if (d.from.value) {
            participantMap.set(d.from.key, d.from.value);
        } else {
            if (!participantMap.get(d.from.key)) {
                participantMap.set(d.from.key, d.from.key);
            }
        }
        if (d.to) {
            if (d.to.value) {
                participantMap.set(d.to.key, d.to.value);
            } else {
                if (!participantMap.get(d.to.key)) {
                    participantMap.set(d.to.key, d.to.key);
                }
            }
        }
        sequences.push({
            from: d.from.key,
            to: d?.to?.key,
            link: d.link,
            label: d.label
        });
    }
    const participants = Array.from(participantMap.entries()).map(([key, value])=>({
            key,
            value
        }));
    return {
        participants,
        sequences
    };
};
const getLabelWidth = (fontSize, label = "")=>label.length * fontSize * 0.6 + fontSize;
const getParticipantIndex = (participants)=>{
    const keys = participants.map((d)=>d.key);
    return (key)=>{
        const index = keys.indexOf(key);
        if (index === -1) throw new Error(`participant key ${key} does not exist`);
        return index;
    };
};
const maxParticipantDistance = ({ participants })=>Math.max(...participants.map((d)=>getLabelWidth(20, d.value)));
const maxSequenceDistance = ({ participants, sequences })=>{
    let maxWidth = 0;
    const getIndex = getParticipantIndex(participants);
    sequences.forEach((seq)=>{
        const width = getLabelWidth(12, seq.label);
        const fromI = getIndex(seq.from);
        if (seq.to) {
            const toI = getIndex(seq.to);
            const dist = Math.abs(fromI - toI);
            if (width / dist > maxWidth) maxWidth = width / dist;
        } else {
            if (width / 2 > maxWidth) maxWidth = width / 2;
        }
    });
    return maxWidth;
};
const getXDistance = (d)=>Math.max(maxParticipantDistance(d), maxSequenceDistance(d));
const getX = (xDistance, index)=>xDistance / 2 + xDistance * index;
const getParticipantLabelY = (height, y)=>y - (height / 2 - 20 * 0.4);
const getSequenceLabelY = (height, y)=>y - (height / 2 - 12 * 1.3);
const getStrokeDashArray = ({ link })=>{
    if (link === "dashed") return `${2 * 3} ${2 * 2}`;
    if (link === "dotted") return `${2} ${2}`;
    return "1 0";
};
const renderDefs = ()=>[
        "<defs>",
        '<path id="arrow-left" transform="translate(-5, -5)" d="M 0 5 L 10 0 L 10 10 z"></path>',
        '<path id="arrow-right" transform="translate(-5, -5)" d="M 0 0 L 10 5 L 0 10 z"></path>',
        "</defs>"
    ];
const renderParticipants = ({ participants }, xDistance)=>[
        '<g fill="none" stroke="currentColor">',
        ...participants.map(({ value }, i)=>{
            const w = getLabelWidth(20, value);
            const x = getX(xDistance, i) - w / 2;
            return `<rect x="${x}" width="${w}" height="${40}" rx="${40 / 10}"></rect>`;
        }),
        "</g>",
        `<g text-anchor="middle" font-size="${20}" fill="currentColor">`,
        ...participants.map(({ value }, i)=>{
            const y = getParticipantLabelY(40, 40);
            return `<text x="${getX(xDistance, i)}" y="${y}">${value}</text>`;
        }),
        "</g>"
    ];
const renderSequences = ({ sequences, participants }, xDistance)=>{
    const getIndex = getParticipantIndex(participants);
    const { y, lines } = sequences.reduce((r, seq)=>{
        const y = r.y + 50;
        const lines = r.lines;
        if (seq.to) {
            const xStart = getX(xDistance, Math.min(getIndex(seq.from), getIndex(seq.to)));
            const xEnd = getX(xDistance, Math.max(getIndex(seq.from), getIndex(seq.to)));
            const xMiddle = xStart + (xEnd - xStart) / 2;
            lines.push(`<line x1="${xStart}" x2="${xEnd}" y1="${y}" y2="${y}" stroke="currentColor" stroke-dasharray="${getStrokeDashArray(seq)}" stroke-width="${2}"></line>`);
            lines.push(`<text x="${xMiddle}" y="${getSequenceLabelY(50, y)}">${seq.label || ""}</text>`);
            if (getIndex(seq.from) < getIndex(seq.to)) {
                lines.push(`<use x="${xEnd}" y="${y}" href="#arrow-right" fill="currentColor"></use>`);
            } else {
                lines.push(`<use x="${xStart}" y="${y}" href="#arrow-left" fill="currentColor"></use>`);
            }
        } else {
            const x = getX(xDistance, getIndex(seq.from));
            lines.push(`<circle cx="${x}" cy="${y}" r="${3}"></circle>`);
            lines.push(`<text x="${x}" y="${getSequenceLabelY(50, y)}">${seq.label || ""}</text>`);
        }
        return {
            y,
            lines
        };
    }, {
        y: 40 * 1.5,
        lines: []
    });
    return {
        lines: [
            `<g text-anchor="middle" font-size="${12}" fill="currentColor">`,
            ...lines,
            "</g>"
        ],
        height: y
    };
};
const renderVerticalLines = ({ participants }, xDistance, height)=>[
        '<g stroke="currentColor" stroke-opacity="0.2">',
        ...participants.map((_, i)=>{
            const x = getX(xDistance, i);
            return `<line x1="${x}" x2="${x}" y1="${40}" y2="${height}"></line>`;
        }),
        "</g>"
    ];
const renderSvg = (SequenceDiagram)=>{
    const xDistance = getXDistance(SequenceDiagram);
    const { lines: sequenceLines, height } = renderSequences(SequenceDiagram, xDistance);
    const h = height + 50 / 2 + 40 / 2;
    const xMargin = xDistance * 0.1;
    const w = xDistance * SequenceDiagram.participants.length + xMargin * 2;
    const font = "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;";
    return [
        `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="font-family:${font}">`,
        ...renderDefs(),
        `<g transform="translate(${xMargin}, ${40 / 2})">`,
        ...renderVerticalLines(SequenceDiagram, xDistance, height),
        ...renderParticipants(SequenceDiagram, xDistance),
        ...sequenceLines,
        "</g>",
        "</svg>"
    ].join("\n");
};
const isUndefinedOr = (check, d)=>typeof d === "undefined" || check(d);
const isString = (d)=>Boolean(d) && String(d) === d;
const isLink = (d)=>isString(d) && [
        "solid",
        "dashed",
        "dotted"
    ].includes(d);
const isRecord = (d)=>Boolean(d) && typeof d === "object" && Object.keys(d).every(isString);
const isParticipant = (d)=>isRecord(d) && isString(d.key) && isString(d.value);
const isSequence = (d)=>isRecord(d) && isString(d.from) && isUndefinedOr(isString, d.to) && isUndefinedOr(isString, d.label) && isUndefinedOr(isLink, d.link);
const err = (msg)=>new Error("Invalid SequenceDiagram: " + msg);
const isSequenceDiagram = (d)=>{
    if (!isRecord(d)) {
        throw err("must be an object");
    }
    if (!Array.isArray(d.participants)) {
        throw err('"partcipants" must be an array');
    }
    if (!d.participants.length) {
        throw err('"participants" list is empty');
    }
    const participantErrors = d.participants.filter((d)=>!isParticipant(d));
    if (participantErrors.length) {
        throw err(`invalid "participants"\n${participantErrors.map((d)=>JSON.stringify(d)).join("\n")}`);
    }
    if (!Array.isArray(d.sequences)) {
        throw err('"sequences" must be an array');
    }
    if (!d.sequences.length) {
        throw err('"sequences" list is empty');
    }
    const sequenceErrors = d.sequences.filter((d)=>!isSequence(d));
    if (sequenceErrors.length) {
        throw err(`invalid sequences\n${sequenceErrors.map((d)=>JSON.stringify(d)).join("\n")}`);
    }
    return true;
};
const participantKeysAreUnique = (participants)=>{
    const keys = participants.map((d)=>d.key);
    if (keys.length !== Array.from(new Set(keys)).length) {
        throw err("participant keys must be unique");
    }
    return true;
};
const allSequencesCorrespondToParticipant = ({ participants, sequences })=>{
    const keys = participants.map((d)=>d.key);
    const errors = [];
    sequences.forEach((d, i)=>{
        if (!keys.includes(d.from)) {
            errors.push(`"from" (${d.from}) in sequence ${i} is not a participant key`);
        }
        if (d.to && !keys.includes(d.to)) {
            errors.push(`"to" (${d.to}) in sequence ${i} is not a participant key`);
        }
    });
    if (errors.length) {
        throw err(errors.join("\n"));
    }
    return true;
};
const isValidSequenceDiagram = (d)=>isSequenceDiagram(d) && participantKeysAreUnique(d.participants) && allSequencesCorrespondToParticipant(d);
const render = (d)=>{
    if (isValidSequenceDiagram(d)) {
        return renderSvg(d);
    }
    throw new Error("invalid sequence diagram");
};
const renderFromString = (d)=>render(parseDsl(d));
export { render as render };
export { renderFromString as renderFromString };

