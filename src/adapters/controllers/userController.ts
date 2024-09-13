import { Request, Response } from 'express';

import { UserUseCase } from '@useCases/userUseCase';

import { User } from '@entities/User';

import { HttpException } from '@shared/exceptions/httpException';
import { MSG } from '@shared/msg';

// ---------------------------------------------------- //

export class UserController {
  private readonly useCase: UserUseCase;

  constructor(useCase: UserUseCase) {
    this.useCase = useCase;
  }

  // -----------------------

  async getAll(_: Request, res: Response) {
    try {
      const users = await this.useCase.getAll();
      return res.status(200).json(users);
    } catch (err) {
      if (err instanceof HttpException) return res.status(err.status).json({ message: err.message });
      return res.status(500).json({ message: MSG.INTERN_SERVER_ERROR });
    }
  }

  async getOneByEmail(req: Request, res: Response) {
    try {
      const { email } = req.params;

      // ! TODO: Validate controller inputs
      const user = await this.useCase.getOneByEmail(email);

      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof HttpException) return res.status(err.status).json({ message: err.message });
      return res.status(500).json({ message: MSG.INTERN_SERVER_ERROR });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { body } = req;

      // ! TODO: Validate controller inputs
      const user = await this.useCase.create(body as User);

      return res.status(201).json(user);
    } catch (err) {
      if (err instanceof HttpException) return res.status(err.status).json({ message: err.message });
      return res.status(500).json({ message: MSG.INTERN_SERVER_ERROR });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { email } = req.params;

      // ! TODO: Validate controller inputs
      const user = await this.useCase.update(email, req.body as User);

      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof HttpException) return res.status(err.status).json({ message: err.message });
      return res.status(500).json({ message: MSG.INTERN_SERVER_ERROR });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { email } = req.params;

      // ! TODO: Validate controller inputs
      await this.useCase.delete(email);

      return res.sendStatus(200);
    } catch (err) {
      if (err instanceof HttpException) return res.status(err.status).json({ message: err.message });
      return res.status(500).json({ message: MSG.INTERN_SERVER_ERROR });
    }
  }
}
