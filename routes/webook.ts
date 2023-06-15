import express, { Router } from "express";
import { eventListener } from "../controllers/webhook";

const router: Router = express.Router();

router.post("/", eventListener);

export default router;
