import express from "express"
import { createRoom, deleteRooms, getAllRooms, getSingleRooms, updateRoom } from "../controllers/roomController.js";
const router = express.Router()
import { verifyAdmin } from "../utils/verifyToken.js";

router.post("/:hotelId", verifyAdmin, createRoom);

//update hotel

router.put("/:id", verifyAdmin, updateRoom);
router.put("/availablity/:id", verifyAdmin, updateRoom);


//delete hotel
router.delete("/:id/:hotelId", verifyAdmin, deleteRooms);

//get hotel
router.get("/:id", getSingleRooms);

//get all hotel
router.get("/", getAllRooms);


export default router