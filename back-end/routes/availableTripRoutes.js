import express from "express";
import { createTrip, getAllTrips } from "../controllers/availableTripController.js";

const router = express.Router();

router.post("/create", createTrip);
router.get("/", getAllTrips);

export default router;
