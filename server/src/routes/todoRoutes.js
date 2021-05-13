import express from "express";
const router = express.Router();
import { getAll, add, update, del } from "../controllers/todoControllers.js";

router.get("/get-all", getAll);
router.post("/add", add);
router.put("/update", update);
router.delete("/delete", del);

export default router;
