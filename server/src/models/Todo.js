import mongoose from "mongoose";
import shortid from "shortid";

const { Schema, model } = mongoose;

const todoSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate,
    },
    title: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model("Todo", todoSchema);
