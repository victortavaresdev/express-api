const ratelimit = require("express-rate-limit");

const requestLimit = ratelimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
});

module.exports = {
  requestLimit,
};
