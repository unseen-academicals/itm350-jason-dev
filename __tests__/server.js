const express = require("express");
const app = express();

app.get("/api/events", (req, res) => {
  res.json({ message: "Event List", events: [] });
});

module.exports = app; // Export app for testing

if (require.main === module) {
  app.listen(3000, () => console.log("Server running on port 3000"));
}