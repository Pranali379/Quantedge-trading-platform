const mongoose = require("mongoose");

const FundsSchema = new mongoose.Schema({
  balance: {
    type: Number,
    default: 4043.10,
  },
});

const FundsModel = mongoose.model("Funds", FundsSchema);

module.exports = { FundsModel };