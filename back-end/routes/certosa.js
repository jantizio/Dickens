import express from "express";

import {Counter,Responder} from "../controllers/certosa.js";

const router=express.Router();

router.get("/",(req,res)=>res.send("Index certosa"));
router.get("/:fileType",Counter);
router.get("/:fileType/:id",Responder);

export default router;