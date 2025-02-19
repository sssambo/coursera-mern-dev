const express = require("express");
const router = express.Router();
const User = require("../../model/User");
const gravatar = require("gravatar");
const bcrypt = require("bcrypt");

router.get("/test", (req, res) => {
  console.log(req.url);
  res.json({ message: "GET api/user route" });
});

router.post("/register", (req, res) => {
  console.log(req.body);
  /*
  console.log(req.body);
  return res.status(400).json({ message: `maintenance` }); */
  let { name, email, password, avatar } = req.body;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(400).json({ message: `User ${email} already exist` });
    } else {
      avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      const newUser = new User({
        name: name,
        email: email,
        password: password,
        avatar: avatar,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              return res.json({
                user: user,
                message: `user ${user.name} created successfully`,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  /*
  console.log(req.body);
  return res.status(400).json({ message: `maintenance` }); */
  let { email, password } = req.body;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ message: `User ${email} doesn't exist` });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) res.json({ msg: "success" });
      else return res.status(400).json({ password: "Password incorrect" });
    });
  });
});
module.exports = router;
