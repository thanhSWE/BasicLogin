var express = require("express");
let route = express.Router();
let path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

route.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/login.html")); //gui xong la dung
});
route.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "/login.html")); //gui xong la dung
});
route.post("/info", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "b2012142" && password == 1234) {
    res.redirect(
      `/info/show?username=${encodeURIComponent(
        username
      )}&password=${encodeURIComponent(password)}`
    );
  } else {
    res.redirect("/");
  }
});
route.get("/info/show", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  res.send(`Xin chào ${username}, Password của bạn là ${password}`);
});
app.use(route);
module.exports = route;
