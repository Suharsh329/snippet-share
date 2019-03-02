import { Router } from "express";
import UserController from "../controller/UserController";

const router = Router();

router.get("/", UserController.getAll);

router.get("/:id([0-9]+)", UserController.getOne);

router.post("/", UserController.createUser);

router.patch("/:id([0-9]+)", UserController.editUser);

router.delete("/:id([0-9]+)", UserController.deleteUser);

export default router;
