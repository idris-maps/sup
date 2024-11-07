import {
  areaChart,
  barChart,
  lineChart,
  multiLineChart,
  pieChart,
  stackedBarChart,
} from "./charts.mjs";
import * as flowChart from "./flow-chart.mjs";
import * as ganttChart from "./gantt.mjs";
import * as sequenceDiagram from "./sequence-diagram.mjs";
import * as sheetMusic from "./sheet-music.mjs";

/**
 * @param {string} content
 * @param {string} [lang ]
 * @returns {Promise<string>}
 */
const renderSvg = async (content, lang) => {
  switch (lang) {
    case "area-chart":
      return areaChart.renderFromString(content);
    case "bar-chart":
      return barChart.renderFromString(content);
    case "flow-chart":
      return flowChart.renderFromString(content);
    case "gantt-chart":
      return ganttChart.renderFromString(content);
    case "line-chart":
      return lineChart.renderFromString(content);
    case "multi-line-chart":
      return multiLineChart.renderFromString(content);
    case "pie-chart":
      return pieChart.renderFromString(content);
    case "sequence-diagram":
      return sequenceDiagram.renderFromString(content);
    case "sheet-music":
      return sheetMusic.renderFromString(content);
    case "stacked-bar-chart":
      return stackedBarChart.renderFromString(content);
    default:
      throw new Error("unknown language: " + lang);
  }
};

/** @type {(content: string, lang?: string, skipWrap?: boolean) => Promise<string>} */
export const renderCodeBlock = async (content, lang, skipWrap) => {
  try {
    return skipWrap
      ? await renderSvg(content, lang)
      : `<div class="serea ${lang}">${await renderSvg(content, lang)}</div>`;
  } catch {
    return `<pre><code ${
      lang ? `class="language-${lang}" ` : ""
    }>${content}</code></pre>`;
  }
};
