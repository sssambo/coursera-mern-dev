const Jwt = require("passport-jwt").Strategy();
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");

const opts = {};
opts.ExtractJwt.fromAuthHeaderAsBearerToken();
