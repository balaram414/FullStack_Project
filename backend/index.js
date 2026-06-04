//const express = require("express");
import express from "express"
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.send("Backend Server is Running #####!");
});

app.get("/hello", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello from EC2 Server",
    timestamp: new Date().toISOString()
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`############Server running on http://localhost:${PORT}`);
});
export default app;