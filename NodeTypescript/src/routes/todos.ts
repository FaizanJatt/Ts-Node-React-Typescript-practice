import { Router } from "express";
import { CreateTodo } from "../controllers/todos";
import { getTodo } from "../controllers/todos";
const router = Router();
router.get("/", getTodo);
router.post("/", CreateTodo);
router.patch("/:id");
router.delete("/:id");

export default router;
