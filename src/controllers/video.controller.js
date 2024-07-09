import { Video } from "../models/video.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllVideos = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query;
});

const publishAVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
});
const getVideoById = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
});
const updateVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
 
});
const deleteVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const deleteVideo = await Video.findByIdAndDelete(videoId);
  if (deleteVideo) {
    return res.status(200).json(200, "user delete successfully");
  } else {
    throw new ApiError(404, "video not found");
  }
});
const togglePublishStatus = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
});
export {
  getAllVideos,
  publishAVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
  togglePublishStatus,
};
