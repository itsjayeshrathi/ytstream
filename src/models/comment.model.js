import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    video: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Video",
      },
    ],
    commenter: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    content: [
      {
        type: String,
        maxlength: 300,
      },
    ],
  },
  { timestamps: true }
);
export const Comment = mongoose.model("Comment", commentSchema);
