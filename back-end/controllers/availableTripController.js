import AvailableTrip from "../models/AvailableTrip.js";

export const createTrip = async (req, res) => {
  const { from, to, dateTime, price, totalSeats } = req.body;

  if (!from || !to || !dateTime || !price || !totalSeats) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const trip = await AvailableTrip.create({
      from,
      to,
      dateTime,
      price,
      totalSeats,
    });

    res.status(201).json({
      message: "Trip created successfully",
      trip,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllTrips = async (req, res) => {
  try {
    const trips = await AvailableTrip.find({});
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
