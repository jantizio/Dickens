import express from "express";

import {Responder} from "../controllers/header.js";

const router=express.Router();

router.get("/",(req,res)=>res.send("Index header"));
router.get("/:fileName",Responder);

export default router;