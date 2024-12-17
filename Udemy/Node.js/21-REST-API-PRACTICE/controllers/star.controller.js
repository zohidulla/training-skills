const Star = require("../models/star.model");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

/**
 * @description Get all stars
 * @route       GET /api/v1/stars
 * @access      Public / with apiKey
 */

exports.getAllStars = asyncHandler(async (req, res, next) => {
  const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 5;
  const limit = parseInt(req.query.limit || pageLimit);
  const page = parseInt(req.query.page || 1);
  const total = await Planet.countDocuments();

  const stars = await Star.find()
    .skip(page * limit - limit)
    .limit(limit);

  res.status(200).json({
    success: true,
    totalPage: Math.ceil(total / limit),
    currentPage: page,
    nextPage: Math.ceil(total / limit) < page + 1 ? null : page + 1,
    data: stars,
  });
});

/**
 * @description Get star by id
 * @route       GET /api/v1/stars/:id
 * @access      Public / with apiKey
 */

exports.getStarById = asyncHandler(async (req, res, next) => {
  const star = await Star.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: star,
  });
});

/**
 * @description Create new star
 * @route       POST /api/v1/stars
 * @access      Private/Admin
 */

exports.createNewStar = asyncHandler(async (req, res, next) => {
  const newStar = await Star.create({
    name: req.body.name,
    temperature: req.body.temperature,
    massa: req.body.massa,
    diameter: req.body.diameter,
    image: "uploads/" + req.file.filename,
  });

  res.status(200).json({
    success: true,
    data: newStar,
  });
});

/**
 * @description Update star
 * @route       PUT /api/v1/stars/:id
 * @access      Private/Admin
 */

exports.updateStar = asyncHandler(async (req, res, next) => {
  const star = await Star.findById(req.params.id);

  const editedStar = {
    name: req.body.name || star.name,
    temperature: req.body.temperature || star.temperature,
    massa: req.body.massa || star.massa,
    diameter: req.body.diameter || star.diameter,
  };

  const updatedStar = await Star.findByIdAndUpdate(req.params.id, editedStar, {
    new: true,
  });

  res.status(200).json({
    success: true,
    data: updatedStar,
  });
});

/**
 * @description Delete star
 * @route       DELETE /api/v1/stars/:id
 * @access      Private/Admin
 */

exports.deleteStar = asyncHandler(async (req, res, next) => {
  await Star.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Deleted successfully",
  });
});
