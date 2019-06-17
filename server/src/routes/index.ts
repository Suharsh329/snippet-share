import { Router } from "express";
import user from "./user";
import snippet from "./snippet";

const routes = Router();

routes.use("/users", user);
routes.use("/snippets", snippet);

export default routes;