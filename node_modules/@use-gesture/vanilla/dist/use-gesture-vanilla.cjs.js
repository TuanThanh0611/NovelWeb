'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./use-gesture-vanilla.cjs.prod.js");
} else {
  module.exports = require("./use-gesture-vanilla.cjs.dev.js");
}
