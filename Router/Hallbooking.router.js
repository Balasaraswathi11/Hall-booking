import express from 'express';
import {  createrooms,  getallrooms ,bookaroom,getallbookedrooms, getallcustomers, customercount} from '../Controller/Hallbooking.controller.js';
// import {  bookroom, createroom, getroomdetails, getroomid,getBookedRooms, getallrooms } from '../Controller/Hallbooking.js';


const router = express.Router();

router.get("/getallrooms", getallrooms);

router.post("/createrooms",createrooms)

router.post("/bookroom",bookaroom)
router.get("/getbookedrooms",getallbookedrooms)
router.get("/getallcustomers",getallcustomers)
router.get("/customercount/:id",customercount)
// router.get("/:room_id",getroomid) 
// router.post("/createroom",createroom)
// router.post("/bookroom", bookroom);
// router.get("/bookedroom",getBookedRooms)
export default router;
   