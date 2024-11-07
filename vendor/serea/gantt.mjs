// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const round = (d)=>Math.floor(d * 100) / 100;
const pad = (d)=>d >= 10 ? String(d) : `0${d}`;
const invertMap = (d)=>{
    const map = new Map();
    for (const [label, value] of d.entries()){
        map.set(value, label);
    }
    return map;
};
const renderElement = ({ tag, attrs, innerText, children })=>{
    let d = "<" + tag;
    if (attrs) {
        for (const [key, value] of Object.entries(attrs)){
            d = d + ` ${key}="${value}"`;
        }
    }
    d = d + ">";
    if (innerText) {
        d = d + innerText;
    }
    if (children) {
        for (const child of children){
            const _child = renderElement(child);
            d = d + _child;
        }
    }
    d = d + `</${tag}>`;
    return d;
};
const isValidDate = (date)=>{
    try {
        const d = new Date(date);
        return !Number.isNaN(d.getTime());
    } catch  {
        return false;
    }
};
const ERROR = {
    noEntries: "Could not read any entries",
    invalidEntries: (section)=>`section "${section}" has no valid entries`,
    notInDomain: (section, entry, dir, value)=>`"${value}" as ${dir} of "${entry}" in section "${section}" is not in domain`,
    notDate: (section, entry, dir, value)=>`"${value}" as ${dir} of "${entry}" in section "${section}" is not a valid date`,
    notUniqDomains: '"domain" must have unique values'
};
const isArray = (d)=>Array.isArray(d);
const validateConfig = ({ domain, sections })=>{
    if (!isArray(sections) || !sections.length) throw new Error(ERROR.noEntries);
    sections.forEach(({ entries, label: sectionLabel }, sectionIndex)=>{
        const section = sectionLabel || sectionIndex;
        if (!isArray(entries) || !entries.length) {
            throw new Error(ERROR.invalidEntries(section));
        }
        entries.forEach(({ start, end, label: entryLabel }, entryIndex)=>{
            const entry = entryLabel || entryIndex;
            if (domain) {
                if (!domain.includes(start)) {
                    throw new Error(ERROR.notInDomain(section, entry, "start", start));
                }
                if (!domain.includes(end)) {
                    throw new Error(ERROR.notInDomain(section, entry, "end", end));
                }
                if (domain.length !== new Set(domain).size) {
                    throw new Error(ERROR.notUniqDomains);
                }
            } else {
                if (!isValidDate(start)) {
                    throw new Error(ERROR.notDate(section, entry, "start", start));
                }
                if (!isValidDate(end)) {
                    throw new Error(ERROR.notDate(section, entry, "end", end));
                }
            }
        });
    });
};
const parseDomain = (line)=>{
    const parts = line.replace("domain:", "").trim().split(",").map((d)=>d.trim());
    if (parts.length > 1) {
        return parts;
    }
    return undefined;
};
const getSectionLabel = (line)=>{
    const label = line.replace("section:", "").trim();
    return label === "" ? undefined : label;
};
const parseEntry = (line)=>{
    const label = line.includes(":") ? line.split(":")[0].trim() : undefined;
    const rest = label ? line.replace(`${label}:`, "").trim() : line;
    const [_start, _end] = rest.split(">");
    const start = (_start || "").trim();
    const end = (_end || _start).trim();
    if (start === "" || end === "") return undefined;
    const entry = {
        start,
        end
    };
    if (label && label !== "") {
        entry.label = label;
    }
    return entry;
};
const parseContent = (content)=>{
    const lines = content.split("\n").map((d)=>d.trim()).filter((d)=>d !== "");
    const sections = [];
    let domain = undefined;
    let first = true;
    let currentSection = undefined;
    for (const line of lines){
        if (first) {
            if (line.startsWith("domain:")) {
                domain = parseDomain(line);
                continue;
            }
            first = false;
        }
        if (line.startsWith("section:")) {
            if (currentSection && currentSection.entries.length) {
                sections.push(currentSection);
            }
            currentSection = {
                label: getSectionLabel(line),
                entries: []
            };
        } else {
            const entry = parseEntry(line);
            if (entry) {
                if (currentSection) {
                    currentSection.entries.push(entry);
                } else {
                    currentSection = {
                        entries: [
                            entry
                        ]
                    };
                }
            }
        }
    }
    if (currentSection && currentSection.entries.length) {
        sections.push(currentSection);
    }
    validateConfig({
        sections,
        domain
    });
    return {
        domain,
        sections
    };
};
const RENDER_CONFIG = {
    fontSizeMultiplier: .9,
    entry: {
        margin: 1,
        height: 20,
        fontSize: 10,
        rectRound: 2
    },
    section: {
        fontSize: 10,
        margin: 5
    },
    legend: {
        height: 10,
        verticalLine: {
            stroke: "currentColor",
            "stroke-dasharray": "2 2",
            opacity: 0.2
        },
        label: {
            fill: "currentColor",
            "text-anchor": "middle",
            "font-size": 8
        }
    }
};
const addPeriod = (period, date)=>{
    const clone = new Date(date);
    if (period === "year") {
        clone.setFullYear(date.getFullYear() + 1);
    } else if (period === "month") {
        clone.setMonth(date.getMonth() + 1);
    } else {
        clone.setDate(date.getDate() + 1);
    }
    return clone;
};
const getEndTime = (end)=>{
    const [_, mm, dd] = end.split("-").map(Number);
    if (dd) {
        return addPeriod("day", new Date(end)).getTime();
    } else if (mm) {
        return addPeriod("month", new Date(end)).getTime();
    } else {
        return addPeriod("year", new Date(end)).getTime();
    }
};
const getDomain = ({ sections })=>{
    const domain = [];
    let minLength = Infinity;
    for (const { entries } of sections){
        for (const { start, end } of entries){
            const startTime = new Date(start).getTime();
            const endTime = getEndTime(end);
            domain.push(startTime);
            domain.push(endTime);
            minLength = Math.min(endTime - startTime, minLength);
        }
    }
    const sorted = domain.sort((a, b)=>a > b ? 1 : -1);
    return {
        domain: sorted,
        minLength
    };
};
const unitLengths = [
    {
        name: "day",
        length: new Date("1970-01-02").getTime()
    },
    {
        name: "week",
        length: new Date("1970-01-08").getTime()
    },
    {
        name: "month",
        length: new Date("1970-02").getTime()
    },
    {
        name: "year",
        length: new Date("1971").getTime()
    },
    {
        name: "decade",
        length: new Date("1980").getTime()
    },
    {
        name: "century",
        length: new Date("2070").getTime()
    }
];
const getClosestUnit = (n)=>{
    let closest = unitLengths[0];
    for (const unitLength of unitLengths){
        if (Math.abs(unitLength.length - n) < Math.abs(closest.length - n)) {
            closest = unitLength;
        }
    }
    return closest;
};
const getScale = (config)=>{
    const { domain, minLength } = getDomain(config);
    const start = domain[0];
    const end = domain[domain.length - 1];
    const diff = end - start;
    const unit = getClosestUnit(diff / (diff / minLength));
    const totalWidth = diff / unit.length * 80;
    const scale = (date, isEnd)=>{
        const time = isEnd ? getEndTime(date) : new Date(date).getTime();
        return 1 / diff * (time - start) * totalWidth;
    };
    return {
        totalWidth,
        scale,
        unit,
        start,
        end
    };
};
const addPositions = (scale)=>(entry)=>{
        const start = scale(entry.start);
        const end = scale(entry.end, true);
        return {
            ...entry,
            x: start,
            width: end - start
        };
    };
const getLabelByUnit = (unit)=>(date)=>{
        switch(unit){
            case "century":
                return String(date.getFullYear());
            case "decade":
                return String(date.getFullYear());
            case "year":
                return String(date.getFullYear());
            case "month":
                return [
                    String(date.getFullYear()),
                    pad(date.getMonth() + 1)
                ].join("-");
            default:
                return [
                    String(date.getFullYear()),
                    pad(date.getMonth() + 1),
                    pad(date.getDate())
                ].join("-");
        }
    };
const incrementByUnit = (unit)=>(date)=>{
        const d = new Date(date);
        if (unit === "century") {
            d.setFullYear(date.getFullYear() + 100);
        } else if (unit === "decade") {
            d.setFullYear(date.getFullYear() + 10);
        } else if (unit === "year") {
            d.setFullYear(date.getFullYear() + 1);
        } else if (unit === "month") {
            d.setMonth(date.getMonth() + 1);
        } else if (unit === "week") {
            d.setDate(date.getDate() + 7);
        } else {
            d.setDate(date.getDate() + 1);
        }
        return d;
    };
const getDiffLabel = (b, a)=>{
    if (!a) return b;
    const _aa = a.split("-").reverse();
    const _bb = b.split("-").reverse();
    return _bb.reduce((r, d, i)=>{
        if (_aa[i] !== d) r.push(d);
        return r;
    }, []).reverse().join("-");
};
const getDateTicks = (startTime, endTime, unit)=>{
    const getLabel = getLabelByUnit(unit);
    const increment = incrementByUnit(unit);
    const ticks = [];
    const label = getLabel(new Date(startTime));
    ticks.push({
        label: label,
        time: new Date(label).getTime()
    });
    let run = true;
    while(run){
        const last = ticks[ticks.length - 1];
        const nextDate = increment(new Date(last.time));
        ticks.push({
            label: getLabel(nextDate),
            time: nextDate.getTime()
        });
        run = nextDate.getTime() <= endTime;
    }
    return ticks.filter((d)=>startTime <= d.time && d.time <= endTime).map((d, i, all)=>({
            label: getDiffLabel(d.label, all[i - 1]?.label),
            date: new Date(d.time).toISOString()
        }));
};
const isRoundUnit = (unit)=>[
        "day",
        "month",
        "year"
    ].includes(unit);
const getLegend = ({ totalWidth, scale, unit, start, end })=>{
    const ticks = getDateTicks(start, end, unit.name);
    const verticalLines = [];
    const labels = [];
    for (const { label, date } of ticks){
        const x = scale(date);
        verticalLines.push(x);
        const labelX = isRoundUnit(unit.name) ? x + 80 / 2 : x;
        if (labelX <= totalWidth) {
            labels.push({
                label,
                x: labelX
            });
        }
    }
    return {
        labels,
        verticalLines
    };
};
const prepareDates = (config)=>{
    const { scale, totalWidth, unit, start, end } = getScale(config);
    const addHorizontalPosition = addPositions(scale);
    const sections = config.sections.map((section)=>({
            label: section.label,
            entries: section.entries.map(addHorizontalPosition)
        }));
    return {
        width: totalWidth,
        sections,
        legend: getLegend({
            scale,
            totalWidth,
            unit,
            start,
            end
        })
    };
};
const getDomain1 = (configDomain)=>{
    const domain = [];
    const domainMap = new Map();
    configDomain.forEach((d, i)=>{
        domain.push(i);
        domainMap.set(d, i);
    });
    return {
        domain,
        domainMap
    };
};
const getScale1 = (domain)=>{
    const start = domain.slice(0, 1)[0];
    const end = domain.slice(-1)[0];
    const diff = end - start;
    return (d)=>1 / diff * (d - start);
};
const getScaleData = (domain)=>{
    const d = getDomain1(domain);
    return {
        ...d,
        scale: getScale1(d.domain)
    };
};
const addPositions1 = ({ scale, domainMap })=>(entry)=>{
        const width = (domainMap.size - 1) * 80;
        const _start = scale(domainMap.get(entry.start) || 0);
        const _end = scale(domainMap.get(entry.end) || 0);
        const start = round(Math.min(_start, _end) * width);
        const end = round(Math.max(_start, _end) * width) + 80;
        return {
            ...entry,
            x: start,
            width: round(end - start)
        };
    };
const getLegend1 = ({ scale, domainMap, domain }, width)=>{
    const invertedMap = invertMap(domainMap);
    const lineXs = new Set();
    const labels = [];
    for (const d of domain){
        const w = width - 80;
        const start = round(scale(d) * w);
        const end = round(scale(d) * w) + 80;
        const center = start + (end - start) / 2;
        lineXs.add(start);
        lineXs.add(end);
        labels.push({
            label: invertedMap.get(d) || "",
            x: center
        });
    }
    return {
        labels,
        verticalLines: Array.from(lineXs)
    };
};
const prepareDomains = (config)=>{
    const scaleData = getScaleData(config.domain);
    const width = scaleData.domainMap.size * 80;
    const addHorizontalPosition = addPositions1(scaleData);
    const sections = config.sections.map((section)=>({
            label: section.label,
            entries: section.entries.map(addHorizontalPosition)
        }));
    const legend = getLegend1(scaleData, width);
    return {
        width,
        sections,
        legend
    };
};
const truncateLabel = (width, fontSize, label = "")=>{
    const maxChars = Math.floor(width / (RENDER_CONFIG.fontSizeMultiplier * fontSize)) - 1;
    return label.length > maxChars + 1 ? label.slice(0, maxChars) + "…" : label;
};
const getMaskId = ()=>"mask_" + String(Math.random()).slice(2);
const renderEntry = ({ x, width, label }, y)=>{
    const id = getMaskId();
    return {
        tag: "g",
        attrs: {
            transform: `translate(${x || 0}, ${(y || 0) + RENDER_CONFIG.entry.margin})`
        },
        children: [
            {
                tag: "defs",
                children: [
                    {
                        tag: "mask",
                        attrs: {
                            id
                        },
                        children: [
                            {
                                tag: "rect",
                                attrs: {
                                    width: "100%",
                                    height: "100%",
                                    fill: "#fff"
                                }
                            },
                            {
                                tag: "text",
                                attrs: {
                                    x: width / 2,
                                    y: RENDER_CONFIG.entry.height * .7 + RENDER_CONFIG.entry.margin,
                                    "text-anchor": "middle",
                                    "font-size": RENDER_CONFIG.entry.fontSize,
                                    fill: "#000"
                                },
                                innerText: truncateLabel(width, RENDER_CONFIG.entry.fontSize, label)
                            }
                        ]
                    }
                ]
            },
            {
                tag: "rect",
                attrs: {
                    mask: `url('#${id}')`,
                    x: RENDER_CONFIG.entry.margin,
                    y: RENDER_CONFIG.entry.margin,
                    width: width - RENDER_CONFIG.entry.margin * 2,
                    height: RENDER_CONFIG.entry.height,
                    rx: RENDER_CONFIG.entry.rectRound,
                    fill: "currentColor"
                }
            }
        ]
    };
};
const renderEntries = (entries, initialY = 0)=>{
    let y = initialY;
    const elements = [];
    for (const entry of entries){
        elements.push(renderEntry(entry, y));
        y = y + RENDER_CONFIG.entry.height + RENDER_CONFIG.entry.margin * 2;
    }
    return {
        y: y + RENDER_CONFIG.entry.margin * 2,
        elements
    };
};
const renderSection = ({ label, entries }, y = 0)=>{
    const { elements, y: _y } = renderEntries(entries, RENDER_CONFIG.section.fontSize);
    const element = {
        tag: "g",
        attrs: {
            transform: `translate(0, ${y + RENDER_CONFIG.section.margin})`
        },
        children: [
            {
                tag: "text",
                attrs: {
                    x: RENDER_CONFIG.section.margin,
                    y: RENDER_CONFIG.section.fontSize * .7,
                    fill: "currentColor",
                    "font-size": RENDER_CONFIG.section.fontSize
                },
                innerText: label || ""
            },
            ...elements
        ]
    };
    return {
        element,
        y: y + _y + RENDER_CONFIG.section.margin
    };
};
const renderSections = (sections, initialY = 0)=>{
    let y = initialY;
    const elements = [];
    for (const section of sections){
        const { y: _y, element } = renderSection(section, y);
        elements.push(element);
        y = _y;
    }
    return {
        y: y + RENDER_CONFIG.section.margin,
        elements
    };
};
const renderLegend = ({ labels, verticalLines }, height)=>{
    const g = {
        tag: "g",
        attrs: {
            transform: `translate(0, ${RENDER_CONFIG.legend.height})`
        },
        children: [
            ...labels.map(({ label, x })=>({
                    tag: "text",
                    innerText: truncateLabel(80, RENDER_CONFIG.legend.label["font-size"], label),
                    attrs: {
                        x,
                        ...RENDER_CONFIG.legend.label
                    }
                })),
            ...verticalLines.map((x)=>({
                    tag: "line",
                    attrs: {
                        x1: x,
                        x2: x,
                        y1: 0,
                        y2: height,
                        ...RENDER_CONFIG.legend.verticalLine
                    }
                }))
        ]
    };
    return g;
};
const renderSvg = ({ width, sections, legend })=>{
    const { elements, y: height } = renderSections(sections);
    const sectionGroup = {
        tag: "g",
        attrs: legend ? {
            transform: `translate(0, ${RENDER_CONFIG.legend.height * 2})`
        } : {},
        children: elements
    };
    const children = legend ? [
        renderLegend(legend, height),
        sectionGroup
    ] : [
        sectionGroup
    ];
    const canvasWidth = width + 80;
    const canvasHeight = legend ? height + 2 * RENDER_CONFIG.legend.height : height;
    const el = {
        tag: "svg",
        attrs: {
            viewBox: `0 0 ${canvasWidth} ${canvasHeight}`,
            xmlns: "http://www.w3.org/2000/svg",
            style: "font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace"
        },
        children: [
            {
                tag: "g",
                attrs: {
                    transform: `translate(${80 / 2}, 0)`
                },
                children
            }
        ]
    };
    return renderElement(el);
};
const render = (config)=>{
    validateConfig(config);
    return renderSvg(config.domain ? prepareDomains(config) : prepareDates(config));
};
const renderFromString = (content)=>render(parseContent(content));
export { render as render };
export { renderFromString as renderFromString };

