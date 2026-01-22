import fs from "fs/promises";
import path from "path";

export const extractTextFromPDF = async (filePath) => {
  try {
    const ext = path.extname(filePath).toLowerCase();

    // Plain text files
    if (ext === ".txt") {
      const text = await fs.readFile(filePath, "utf-8");
      return {
        text: text.trim(),
        numPages: 1,
      };
    }

    // PDF files - Dynamically import pdfjs-dist legacy build
    const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");

    const buffer = await fs.readFile(filePath);
    const uint8Array = new Uint8Array(buffer);

    const loadingTask = pdfjsLib.getDocument(uint8Array);
    const pdf = await loadingTask.promise;

    let fullText = "";
    const numPages = pdf.numPages;

    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      fullText += pageText + "\n";
    }

    return {
      text: fullText.trim(),
      numPages: numPages,
    };
  } catch (err) {
    console.error("Document parse error:", err);
    throw new Error(`Failed to parse document: ${err.message}`);
  }
};
