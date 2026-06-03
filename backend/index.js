const express = require("express");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.send("Backend Server is Running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});