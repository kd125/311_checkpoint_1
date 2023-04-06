const express = require("express");
const bodyParser = require("body-parser");

const usersRoute = require("./routes/users");
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.use(usersRoute);

const port = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Welcome to my Checkpoint project!"));

app.listen(port, () => {
  console.log("app is listening on:", port);
});
