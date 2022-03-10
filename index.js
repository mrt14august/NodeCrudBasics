const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users", usersRoutes);

//to show testing
app.get("/", (req, res) => {
  res.send("hello from Homepage");

  console.log("[TEST...");
});

app.listen(PORT, () => {
  console.log(`server running on...... http://localhost:${PORT}`);
});
