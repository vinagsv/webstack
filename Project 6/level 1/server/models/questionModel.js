import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: String,
  options: [
    {
      id: Number,
      value: String,
    },
  ],
  answer: {
    id: Number,
    value: String,
  },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
