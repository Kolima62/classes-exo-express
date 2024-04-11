const express = require("express");

const app = express();

const port = 3000;

app.get("/", function (req, res) {
  res.send(console.log("ok"));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`ok sur le port ${port}`);
  }
});

app.get("/users", function (req, res) {
  res.send({
    title: "Profil(s)",
    id: 11101998,
    nom: "Malik",
    age: 25,
    experience: 0,
    deception: 100,
  });
});
