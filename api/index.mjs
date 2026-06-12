let server;

export default async function handler(req, res) {
  try {
    // Lazy-load server on first request
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
