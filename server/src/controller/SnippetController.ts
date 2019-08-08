import { getManager, getRepository } from "typeorm";
import { Request, Response } from "express";
import { Snippet } from "../entity/Snippet";

class SnippetController {

  // Guest user
  static getAll = async (req: Request, res: Response) => {
    const manager = getManager();
    let snippets: Snippet = undefined;
    try {
      snippets = await manager.query("SELECT * FROM guest_user LIMIT 25");
    } catch (error) {
      console.log(error)
    }
    /* SELECT s.sid, s.title, s.code, s.language, ARRAY_TO_STRING(ARRAY_AGG(t.name), ' ') AS tags, u.username, u.profile_pic, (SELECT COUNT(l.*) FROM likes l WHERE l.sid = s.sid) AS likes FROM snippets s INNER JOIN users u ON s.uid = u.uid INNER JOIN snippets_tags s_t ON s.sid = s_t.sid INNER JOIN tags t on t.tid = s_t.tid GROUP BY s.sid, u.username, u.profile_pic; */
    res.send(snippets);
  };

  // Logged-in user
  static getAllLogged = async (req: Request, res: Response) => {
    const manager = getManager();
    let snippets: Snippet = undefined;
    try {
      snippets = await manager.query("SELECT * FROM logged_in_user(?) LIMIT 50", [req.params.id]);
    } catch (error) {
      console.log(error);
    }
    /* SELECT s.sid, s.title, s.code, s.language, ARRAY_TO_STRING(ARRAY_AGG(t.name), ' ') AS tags, u.username, u.profile_pic, (SELECT COUNT(l.*) FROM likes l WHERE l.sid = s.sid) AS likes, EXISTS(SELECT l.lid FROM likes l WHERE l.sid = s.sid AND l.uid = ?) AS liked, EXISTS(SELECT b.bid FROM bookmarks b WHERE b.sid = s.sid AND b.uid = ?) AS bookmarked FROM snippets s INNER JOIN users u ON s.uid = u.uid INNER JOIN snippets_tags s_t ON s.sid = s_t.sid INNER JOIN tags t on t.tid = s_t.tid GROUP BY s.sid, u.username, u.profile_pic; */

    res.send(snippets);
  };

  // Created Snippets
  static getCreated = async (req: Request, res: Response) => {
    const manager = getManager();
    let snippets: Snippet = undefined;
    try {
      snippets = await manager.query("SELECT * FROM logged_in_user(?) WHERE username = ?", [req.params.id, req.params.username]);
    } catch (error) {
      console.log(error);
    }

    res.send(snippets);
  };

  // Liked Snippets
  static getLiked = async (req: Request, res: Response) => {
    const manager = getManager();
    let snippets: Snippet = undefined;
    try {
      snippets = await manager.query("SELECT * FROM logged_in_user(?) WHERE liked = 't'", [req.params.id]);
    } catch (error) {
      console.log(error);
    }

    res.send(snippets);
  };

  // Bookmarked Snippets
  static getBookmarked = async (req: Request, res: Response) => {
    const manager = getManager();
    let snippets: Snippet = undefined;
    try {
      snippets = await manager.query("SELECT * FROM logged_in_user(?) WHERE bookmarked = 't'", [req.params.id]);
    } catch (error) {
      console.log(error);
    }

    res.send(snippets);
  };

  // Snippets of other users
  static getOtherUserSnippets = async (req: Request, res: Response) => {
    const manager = getManager();
    let snippets: Snippet = undefined;
    try {
      snippets = await manager.query("SELECT * FROM logged_in_user(?) WHERE username = ?", [req.params.id, req.params.username]);
    } catch (error) {
      console.log(error);
    }

    res.send(snippets);
  };

  // Create Snippet
  static createSnippet = async (req: Request, res: Response) => {

    let { title, code, language, uid, tags } = req.body;
    let sid = undefined;
    let snippet = new Snippet();
    snippet.title = title;
    snippet.code = code;
    snippet.language = language;
    snippet.user = uid;

    const snippetRepository = getRepository(Snippet);
    try {
      sid = await snippetRepository.save(snippet);
    } catch (error) {
      res.status(409).send(error.detail);
      return;
    }

    const manager = getManager();
    try {
      tags.map((tag: number) => {
        manager.query("INSERT INTO snippets_tags(sid, tid) VALUES(?, ?)", [sid, tag]);
      })
    } catch (error) {
      res.status(409).send(error.detail);
      return;
    }

    res.status(201).send("Snippet created: " + sid);
  };

  // Edit Snippet
  static editSnippet = async (req: Request, res: Response) => {
    const snippetRepository = getRepository(Snippet);
    try {
      await snippetRepository.findOneOrFail(req.params.id);
    } catch (error) {
      res.status(404).send("Snippet not found");
      return;
    }

    try {
      await snippetRepository.update(req.params.id, req.body);
    } catch (error) {
      res.status(409).send(error);
      return;
    }

    res.status(204).send();
  };

  // Delete Snippet
  static deleteSnippet = async (req: Request, res: Response) => {
    const snippetRepository = getRepository(Snippet);
    try {
      await snippetRepository.findOneOrFail(req.params.id);
    } catch (error) {
      res.status(404).send("Snippet not found");
      return;
    }

    snippetRepository.delete(req.params.id);

    res.status(204).send();
  };
};

export default SnippetController;
