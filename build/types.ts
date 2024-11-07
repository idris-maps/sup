export interface Page {
  type: "html" | "md";
  content: string;
  filePath: string;
  relativePath: string;
  data?: Record<string, unknown>;
  pageDataFile?: string;
}
