import express from "express";
import {
  countbyCity,
  countbyType,
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotelRooms,
  getSingleHotel,
  updateHotel,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", verifyAdmin, createHotel);

//update hotel

router.put("/:id", updateHotel);

//delete hotel
router.delete("/:id", deleteHotel);

//get hotel
router.get("/find/:id", getSingleHotel);

//get all hotel
router.get("/", getAllHotel);
router.get("/countbyCity", countbyCity);
router.get("/countbyType", countbyType);
router.get("/room/:id", getHotelRooms);





export default router;
