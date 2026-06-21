const https = require("https");
const url = "https://www.tuyuesouxin.cn/ja/blog/deepseek-v4-price-cut-geo/";
https.get(url, (res) => {
  console.log("Status: " + res.statusCode);
  console.log("Headers:");
  for (const [k, v] of Object.entries(res.headers)) {
    if (["cache-control","etag","last-modified","x-cache","cf-cache-status","cdn-cache-control"].includes(k.toLowerCase())) {
      console.log("  " + k + ": " + v);
    }
  }
  let data = "";
  res.on("data", d => data += d);
  res.on("end", () => {
    // Check what the server is actually serving
    const artStart = data.indexOf("<article");
    if (artStart >= 0) {
      console.log("\n=== LIVE ARTICLE START ===");
      console.log(data.substring(artStart, artStart + 400));
    }
    console.log("\nEnglish H1 on live: " + (data.includes("DeepSeek V4 Cuts") ? "YES" : "NO"));
    console.log("YAML on live: " + (data.includes("category: TMG-Blog") ? "YES" : "NO"));
    console.log("<hr> on live: " + (data.match(/<hr/g) || []).length);
  });
}).on("error", e => console.log("Error: " + e.message));
