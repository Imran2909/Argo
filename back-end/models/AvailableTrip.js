import mongoose from "mongoose";

const availableTripSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
      trim: true,
    },
    to: {
      type: String,
      required: true,
      trim: true,
    },
    dateTime: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    totalSeats: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const AvailableTrip = mongoose.model("AvailableTrip", availableTripSchema);
export default AvailableTrip;
