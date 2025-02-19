const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const post = require("./routes/api/post");
const profile = require("./routes/api/profile");
const users = require("./routes/api/users");
app.use(express.urlencoded({ extended: false }));
//app.use(express.json());
app.use("/api/post", post);
app.use("/api/profile", profile);
app.use("/api/users", users);

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
