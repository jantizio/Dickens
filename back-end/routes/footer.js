import express from "express";

import {Responder} from "../controllers/footer.js";

const router=express.Router();

router.get("/",(req,res)=>res.send("Index footer"));
router.get("/:fileName",Responder);

export default router;