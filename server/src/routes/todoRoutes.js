import express from "express";
const router = express.Router();
import { getAll, add, update, del } from "../controllers/todoControllers.js";

router.get("/get-all", getAll);
router.post("/add", add);
router.post("/update", update);
router.post("/delete", del);

export default router;
