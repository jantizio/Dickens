import express from "express";

import {Counter,Responder} from "../controllers/pinacoteca.js";

const router=express.Router();

router.get("/",(req,res)=>res.send("Index pinacoteca"));
router.get("/:fileType",Counter);
router.get("/:fileType/:id",Responder);

export default router;