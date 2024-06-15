import mongoose from "mongoose";
import { refreshAccessToken } from "../controllers/User.controller";
const likeSchema = new mongoose.Schema(
  {
    likedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    video: {
      type: mongoose.Types.ObjectId,
      ref: "Video",
    },
    comment: {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
    },
    tweet: {
      type: mongoose.Types.ObjectId,
      ref: "Tweet",
    },
  },
  { timestamps: true }
);
export const Like = mongoose.model("Like", likeSchema);
