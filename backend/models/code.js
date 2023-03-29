const mongoose = require("mongoose");

const codeSchema = mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Code", codeSchema);
