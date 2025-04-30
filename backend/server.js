const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Serve API routes first (optional)
app.get("/api", (req, res) => {
  res.json({ message: "API is working" });
});

// Serve static frontend files from build directory
const buildPath = path.join(__dirname, "..", "frontend", "build");
console.log("Serving static files from:", buildPath);

// DO NOT use wildcard '*' in app.use()
app.use(express.static(buildPath));

// Route all unmatched requests to React's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
