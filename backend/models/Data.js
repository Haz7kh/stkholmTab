const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    personnr: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }, // Added address field
    dataField: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);
