import express from "express";
const router = express.Router();
import {
  getAll,
  add,
  edit,
  del,
  done,
} from "../controllers/todoControllers.js";

router.post("/get-all", getAll);
router.post("/add", add);
router.post("/edit", edit);
router.post("/delete", del);
router.post("/done", done);

export default router;
