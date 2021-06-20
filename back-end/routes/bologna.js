import express from "express";

import {Counter,Responder} from "../controllers/bologna.js";

const router=express.Router();

router.get("/",(req,res)=>res.send("Index bologna"));
router.get("/:fileType",Counter);
router.get("/:fileType/:id",Responder);

export default router;
