const mongoose = require("mongoose");

const agentSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please Add Agent Name"],
    },
    role: {
      type: String,
      required: [true, "Please Add Agent Role"],
    },
    gun: {
      type: String,
      required: [true, "Please Add Agent Cost"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Agent", agentSchema);
