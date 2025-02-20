const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const keys = require("./keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");
console.log("console.log(keys);");
console.log(keys);
console.log(keys.secretOrKey);
const opts = {};
const bir = console.log(keys.secretOrKey);
console.log(ExtractJwt.fromAuthHeaderAsBearerToken());
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
(module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log(ExtractJwt.fromAuthHeaderAsBearerToken());
      console.log(jwt_payload);
      const user = User.findById({ id: jwt_payload.id });
    })
  );
}),
  bir;
