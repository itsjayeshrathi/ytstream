import mongoose from "mongoose";
const tweetSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    content: [
      {
        type: String,
        maxlength: 300,
      },
    ],
  },
  { timestamps: true }
);
export const Tweet = mongoose.model("Tweet", tweetSchema);
