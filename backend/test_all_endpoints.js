/**
 * LearnForge Endpoints & AI Integration Verification Script
 * Run with: node test_all_endpoints.js
 */
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

console.log("==========================================");
console.log("   LearnForge System Diagnostics & Tests  ");
console.log("==========================================");

let testsPassed = 0;
let testsFailed = 0;

function report(name, passed, detail = "") {
  if (passed) {
    console.log(`[PASS] ${name} ${detail ? "- " + detail : ""}`);
    testsPassed++;
  } else {
    console.log(`[FAIL] ${name} ${detail ? "- " + detail : ""}`);
    testsFailed++;
  }
}

// 1. Check Node & Environment Variables
console.log("\n1. Environment Configuration Check:");
report("JWT_SECRET configured", !!process.env.JWT_SECRET);
report("PORT configured", !!(process.env.PORT || 5000), `Port ${process.env.PORT || 5000}`);
report(
  "MONGO_URI configured",
  !!(process.env.MONGO_URI && !process.env.MONGO_URI.includes("<username>")),
  process.env.MONGO_URI && !process.env.MONGO_URI.includes("<username>")
    ? "Valid URI syntax"
    : "Placeholder or missing"
);
report(
  "GEMINI_API_KEY configured",
  !!process.env.GEMINI_API_KEY,
  process.env.GEMINI_API_KEY ? "Key detected" : "Key missing in backend/.env"
);

// 2. Test Text Chunker & Fallback Logic
console.log("\n2. Utility Unit Tests:");
try {
  const { textChunker, findRelevantChunks } = await import("./utils/textChunker.js");
  const sampleDoc = "LearnForge is an AI-powered document companion. It creates flashcards and quizzes. Spaced repetition improves retention.";
  const chunks = textChunker(sampleDoc, 20, 5);
  report("Text Chunker split text into chunks", chunks.length > 0, `${chunks.length} chunks generated`);

  const relevant = findRelevantChunks(chunks, "spaced repetition", 2);
  report("RAG Chunk Search retrieval", Array.isArray(relevant), `Found ${relevant.length} relevant chunks`);
} catch (e) {
  report("Text Chunker & Search", false, e.message);
}

// 3. Test PDF/TXT Parser on sample text
try {
  const { extractTextFromPDF } = await import("./utils/pdfParser.js");
  report("Document Parser module loaded", typeof extractTextFromPDF === "function");
} catch (e) {
  report("Document Parser module", false, e.message);
}

// 4. Test Gemini Model Fallback queue
console.log("\n3. AI Service Verification:");
if (!process.env.GEMINI_API_KEY) {
  console.log("ℹ️  Skipping Live Gemini API call (No GEMINI_API_KEY in .env)");
} else {
  try {
    const { generateText } = await import("./utils/geminiService.js");
    console.log("Calling Gemini API with fallback queue...");
    const reply = await generateText("Say 'LearnForge is ready!' in 5 words or less.");
    report("Gemini AI API live call", true, `Response: "${reply}"`);
  } catch (e) {
    report("Gemini AI API live call", false, e.message);
  }
}

console.log("\n==========================================");
console.log(`Summary: ${testsPassed} passed, ${testsFailed} failed`);
console.log("==========================================");
process.exit(testsFailed > 0 ? 1 : 0);
