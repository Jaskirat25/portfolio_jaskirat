import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the compiled SSR server from the dist output
const serverModule = await import(path.join(__dirname, "../dist/server/server.js"));
const server = serverModule.default;

export default async function handler(req, res) {
  try {
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
    console.error(err);
    res.statusCode = 500;
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end("<h1>Server error</h1>");
  }
}
