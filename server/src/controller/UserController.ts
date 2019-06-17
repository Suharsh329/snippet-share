import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { User } from "../entity/User";

class UserController {

  static getAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    let users: User[] = undefined;
    try {
      users = await userRepository.find();
    } catch (error) {
      console.log(error);
    }
    res.send(users);
  };

  static getOne = async (req: Request, res: Response) => {
    let user: User = undefined;
    const userRepository = getRepository(User);
    try {
      user = await userRepository.findOneOrFail(req.params.id);
    } catch (error) {
      res.status(404).send("User not found");
    }
    res.send(user);
  };

  static createUser = async (req: Request, res: Response) => {

    let { name, username, email, password } = req.body;

    let user = new User();
    user.name = name;
    user.username = username;
    user.email = email;
    user.password = password;

    const userRepository = getRepository(User);
    try {
      await userRepository.save(user);
    } catch (error) {
      res.status(409).send(error.detail);
      return;
    }

    res.status(201).send("User created");
  };

  static editUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    try {
      await userRepository.findOneOrFail(req.params.id);
    } catch (error) {
      res.status(404).send("User not found");
      return;
    }

    try {
      await userRepository.update(req.params.id, req.body);
    } catch (error) {
      res.status(409).send(error);
      return;
    }

    res.status(204).send();
  };

  static deleteUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    try {
      await userRepository.findOneOrFail(req.params.id);
    } catch (error) {
      res.status(404).send("User not found");
      return;
    }

    userRepository.delete(req.params.id);

    res.status(204).send();
  };
};

export default UserController;
