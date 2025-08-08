const cloudinary = require("cloudinary").v2;
const eventModel = require("../models/EventPost.model");

const eventPostController = async (req, res) => {
  try {
    const { title, date, time, location, image } = req.body;

    const file = req.files?.image;
    if (file) {
      const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedFormats.includes(file.mimetype)) {
        return res.status(400).json({
          error: "Invalid file format. Only PNG or JPG are allowed.",
        });
      }

      // Upload image to Cloudinary
      const result = await cloudinary.uploader.upload(file.tempFilePath);

      console.log("Image uploaded to Cloudinary:", result.secure_url);

      // Create new event
      const newEvent = new eventModel({
        title,
        date,
        time,
        location,
        image: result.secure_url,
      });

      await newEvent.save();

      res
        .status(201)
        .json({ message: "Event created successfully", event: newEvent });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = {
  eventPostController,
};
