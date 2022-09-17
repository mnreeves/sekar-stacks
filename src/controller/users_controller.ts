import { Request, Response } from 'express';
import usersService from '../service/users_service';

export default async function usersController(request: Request, response: Response) {
  try {
    const users = await usersService();
    response.status(200).send(users);
  } catch (error: any) {
    response.status(500).send(error.message);
  }
}
