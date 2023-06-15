import express, { Router } from "express";
import { getCharge } from "../controllers/charge";

const router: Router = express.Router();

router.post("/", getCharge);

export default router;
