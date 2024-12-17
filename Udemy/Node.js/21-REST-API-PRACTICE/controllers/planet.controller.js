const Planet = require("../models/planet.model");
const Star = require("../models/star.model");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

/**
 * @description Get all planets
 * @route       GET /api/v1/planets
 * @access      Public / with apiKey
 */
exports.getAllPlanets = asyncHandler(async (req, res, next) => {
  const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 5;
  const limit = parseInt(req.query.limit || pageLimit);
  const page = parseInt(req.query.page || 1);
  const total = await Planet.countDocuments();

  const planets = await Planet.find()
    .skip(page * limit - limit)
    .limit(limit);

  res.status(200).json({
    success: true,
    totalPage: Math.ceil(total / limit),
    currentPage: page,
    nextPage: Math.ceil(total / limit) < page + 1 ? null : page + 1,
    data: planets,
  });
});

/**
 * @description Get planet by id
 * @route       GET /api/v1/planets/:id
 * @access      Public / with apiKey
 */
exports.getPlanetById = asyncHandler(async (req, res, next) => {
  const planet = await Planet.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: planet,
  });
});

/**
 * @description Create new planet
 * @route       POST /api/v1/planets
 * @access      Private/Admin
 */
exports.createPlanet = asyncHandler(async (req, res, next) => {
  const star = await Star.findOne({ name: req.body.star });

  const newPlanet = await Planet.create({
    name: req.body.name,
    distanceToStar: req.body.distanceToStar,
    diameter: req.body.diameter,
    yearDuration: req.body.yearDuration,
    dayDuration: req.body.dayDuration,
    temperature: req.body.temperature,
    sequenceNumber: req.body.sequenceNumber,
    satellites: req.body.satellites,
    image: "uploads/" + req.file.filename,
    star: star._id,
  });

  await Star.findOneAndUpdate(
    { name: req.body.star },
    { $push: { planets: newPlanet._id } },
    { new: true, upsert: true }
  );

  res.status(201).json({
    success: true,
    data: newPlanet,
  });
});

/**
 * @description Update planet
 * @route       PUT /api/v1/planets/:id
 * @access      Private/Admin
 */

exports.updatePlanet = asyncHandler(async (req, res, next) => {
  const planet = await Planet.findById(req.params.id);

  const editedPlanet = {
    name: req.body.name || planet.name,
    distanceToStar: req.body.distanceToStar | planet.distanceToStar,
    diameter: req.body.diameter || planet.diameter,
    yearDuration: req.body.yearDuration || planet.yearDuration,
    dayDuration: req.body.dayDuration || planet.dayDuration,
    temperature: req.body.temperature || planet.temperature,
    sequenceNumber: req.body.sequenceNumber || planet.sequenceNumber,
    satellites: req.body.satellites || planet.satellites,
  };

  const updatedPlanet = await Planet.findByIdAndUpdate(
    req.params.id,
    editedPlanet,
    {
      new: true,
    }
  );

  res.status(200).json({
    success: true,
    data: updatedPlanet,
  });
});

/**
 * @description Delete planet
 * @route       DELETE /api/v1/planets/:id
 * @access      Private/Admin
 */

exports.deletePlanet = asyncHandler(async (req, res, next) => {
  await Planet.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Deleted successfully",
  });
});
