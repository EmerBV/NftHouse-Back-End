import express from "express";

import {
  getAllAssets,
  getAssets,
  getAssetById,
  deleteAsset,
  createAsset,
  updateAsset
} from "../controllers/assetController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const assetRouter = express.Router();

assetRouter
  .route("/")
  .get(getAllAssets);
assetRouter
  .route("/")
  .get(getAssets)
  .post(protect, admin, createAsset);
assetRouter
  .route("/:id")
  .get(getAssetById)
  .delete(protect, admin, deleteAsset)
  .put(protect, admin, updateAsset);

export default assetRouter;
