import asyncHandler from "express-async-handler";
import Asset from "../models/assetModel.js";

// @desc    Fetch all assets
// @route   GET /api/assets
// @access  Public
const getAllAssets = asyncHandler(async (req, res) => {
  const assets = await Asset.find();

  res.json(assets);
});

// @desc    Fetch user assets
// @route   GET /api/account
// @access  Private
const getAssets = asyncHandler(async (req, res) => {
  const userAssets = await Asset.find({ user: req.user.id });

  res.json(userAssets);
});

// @desc    Fetch single asset
// @route   GET /api/assets/:id
// @access  Public
const getAssetById = asyncHandler(async (req, res) => {
  const asset = await Asset.findById(req.params.id);

  if (asset) {
    res.json(asset);
  } else {
    res.status(404);
    throw new Error("Asset not found");
  }
});

// @desc    Delete an asset
// @route   DELETE /api/assets/:id
// @access  Private/Admin
const deleteAsset = asyncHandler(async (req, res) => {
  const asset = await Asset.findById(req.params.id);

  if (asset) {
    await asset.remove();
    res.json({ message: "Asset removed" });
  } else {
    res.status(404);
    throw new Error("Asset not found");
  }
});

// @desc    Create an asset
// @route   POST /api/assets
// @access  Private/Admin
const createAsset = asyncHandler(async (req, res) => {
  const asset = new Asset({
    name: req.body.name,
    price: req.body.price,
    user: req.user.id,
    image: req.body.image,
    category: req.body.category,
    likes: req.body.likes,
    sale: req.body.sale,
  });

  const createdAsset = await asset.save();
  res.status(201).json(createdAsset);
});

// @desc    Update an asset
// @route   PUT /api/assets/:id
// @access  Private/Admin
const updateAsset = asyncHandler(async (req, res) => {
  const { name, price, image, category } = req.body;

  const asset = await Asset.findById(req.params.id);

  if (asset) {
    asset.name = name;
    asset.price = price;
    asset.image = image;
    asset.category = category;

    const updatedAsset = await asset.save();
    res.json(updatedAsset);
  } else {
    res.status(404);
    throw new Error("Asset not found");
  }
});

const getTopAssets = asyncHandler(async (req, res) => {
  const assets = await Asset.find({}).sort({ rating: -1 }).limit(3);

  res.json(assets);
});

export {
  getAllAssets,
  getAssets,
  getAssetById,
  deleteAsset,
  createAsset,
  updateAsset,
  getTopAssets,
};
