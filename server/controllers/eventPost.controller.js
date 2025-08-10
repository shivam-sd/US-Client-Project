const cloudinary = require("cloudinary").v2;
const eventModel = require("../models/EventPost.model");

const eventPostController = async (req, res) => {
  try {
    const { title, description, date, time, location, image } = req.body;

    const file = req.files?.image;
    if (file) {
      const allowedFormats = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
      if (!allowedFormats.includes(file.mimetype)) {
        return res.status(400).json({
          error: "Invalid file format. Only PNG, JPG, and WEBP are allowed.",
        });
      }

      // Upload image to Cloudinary
      const result = await cloudinary.uploader.upload(file.tempFilePath);

      console.log("Image uploaded to Cloudinary:", result.secure_url);

      // Create new event
      const newEvent = new eventModel({
        title,
        description,
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


const fetchAllEvents = async (req,res) => {
  try{
    const events = await eventModel.find().sort({ createdAt: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}


const eventDeleteController = async (req, res) => {
  try {
    const { id } = req.params;
    await eventModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};



const GetEventsByIDController = async(req,res) => {
  try {
    const { id } = req.params;
    const event = await eventModel.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}



module.exports = {
  eventPostController,
  fetchAllEvents,
  eventDeleteController,
  GetEventsByIDController
};
