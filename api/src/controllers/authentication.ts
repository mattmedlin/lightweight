import express from "express";
import { createUser, getUserByEmail, updateUserById } from "../queries/users";
import { authentication, random } from "../helpers";
import { DOMAIN, SESSION_TOKEN } from "../constants";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.sendStatus(400);
    }

    const result = await getUserByEmail(email);

    if (!result || result.length > 0) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      username,
      email,
      salt,
      password: authentication(salt, password),
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }

    const result = await getUserByEmail(email);

    if (!result || result.length == 0) {
      return res.sendStatus(400);
    }

    const user = result[0];

    const expectedHash = authentication(user.salt, password);

    if (user.password !== expectedHash) {
      return res.sendStatus(403);
    }

    user.sessionToken = authentication(random(), user.password);

    const updatedUser = await updateUserById(user.id, user);

    const cookieOptions = {
      domain: DOMAIN,
      path: "/",
      expires: new Date(Date.now() + 900000),
    } as any;

    res.cookie(SESSION_TOKEN as any, user.sessionToken, cookieOptions);

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
