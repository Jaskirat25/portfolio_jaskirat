import { readFileSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDir = path.join(__dirname, "../dist/client");

let server;

const mimeTypes = {
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

export default async function handler(req, res) {
  try {
    // Try to serve static files from dist/client first
    if (req.method === "GET" || req.method === "HEAD") {
      const pathname = new URL(req.url, `https://${req.headers.host}`).pathname;
      const filePath = path.join(clientDir, pathname);

      // Prevent directory traversal
      if (filePath.startsWith(clientDir) && existsSync(filePath)) {
        const ext = path.extname(filePath).toLowerCase();
        const mimeType = mimeTypes[ext] || "application/octet-stream";
        res.setHeader("content-type", mimeType);
        res.setHeader("cache-control", "public, max-age=3600");
        res.end(readFileSync(filePath));
        return;
      }
    }

    // Fall back to SSR handler
    if (!server) {
      try {
        const serverModule = await import("../dist/server/server.js");
        server = serverModule.default;
      } catch (importErr) {
        console.error("Failed to import server module:", importErr);
        res.statusCode = 500;
        res.setHeader("content-type", "text/html; charset=utf-8");
        res.end(`<h1>Server initialization failed</h1><pre>${importErr.message}</pre>`);
        return;
      }
    }

    const url = new URL(req.url, `https://${req.headers.host}`);
    const request = new Request(url.toString(), {
      method: req.method,
      headers: req.headers,
      body: ["GET", "HEAD"].includes(req.method) ? undefined : req,
    });

    const response = await server.fetch(request, {}, {});

    // Set status and headers
    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    // Stream or send body
    const arrayBuffer = await response.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error("Request handler error:", err);
    res.statusCode = 500;
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end(`<h1>Server error</h1><pre>${err.message}</pre>`);
  }
}
