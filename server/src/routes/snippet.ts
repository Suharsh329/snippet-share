import { Router } from "express";
import SnippetController from "../controller/SnippetController";

const router = Router();

router.get("/", SnippetController.getAll);

router.get("/logged/:id([0-9]+)", SnippetController.getAllLogged);

router.get("/created/:id([0-9]+)", SnippetController.getCreated);

router.get("/liked/:id([0-9]+)", SnippetController.getLiked);

router.get("/bookmarked/:id([0-9]+)", SnippetController.getBookmarked);

router.get("/others/:id([0-9]+)", SnippetController.getOtherUserSnippets);

router.post("/", SnippetController.createSnippet);

router.patch("/:id([0-9]+)", SnippetController.editSnippet);

router.delete("/:id([0-9]+)", SnippetController.deleteSnippet);

export default router;
