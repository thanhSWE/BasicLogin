var express = require("express");
let route = express.Router();
let path = require("path");
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
      `/info/show`
    );
  } else {
    res.redirect("/");
  }
});
route.get("/info/show", (req, res) => {
  res.send("Đã Đăng nhập thành công");
});
module.exports = route;
