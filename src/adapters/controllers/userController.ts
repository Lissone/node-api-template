import { Request, Response } from 'express';

import { IUserUseCase } from '@useCases/user/IUserUseCase';

import { IUser } from '@entities/IUser';

import { MSG } from '@shared/msg';

// ---------------------------------------------------- //

export class UserController {
  private readonly useCase: IUserUseCase;

  constructor(useCase: IUserUseCase) {
    this.useCase = useCase;
  }

  async getAll(_: Request, res: Response) {
    try {
      const users = await this.useCase.getAll();
      return res.status(200).json(users);
    } catch {
      return res.status(500).json({ message: MSG.INTERN_SERVER_ERROR });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { email } = req.params;

      const user = await this.useCase.getOne(email);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json(user);
    } catch {
      return res.status(500).json({ message: MSG.INTERN_SERVER_ERROR });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { body } = req;

      // TODO: Validate controller inputs
      const user = await this.useCase.create(body as IUser);

      return res.status(201).json(user);
    } catch {
      return res.status(500).json({ message: MSG.INTERN_SERVER_ERROR });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { email } = req.params;

      let user = await this.useCase.getOne(email);
      if (!user) {
        return res.status(404).json({ message: MSG.USER_NOT_FOUND });
      }

      // TODO: Validate controller inputs
      user = await this.useCase.update(email, req.body as IUser);

      return res.status(200).json(user);
    } catch {
      return res.status(500).json({ message: MSG.INTERN_SERVER_ERROR });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { email } = req.params;

      const user = await this.useCase.getOne(email);
      if (!user) {
        return res.status(404).json({ message: MSG.USER_NOT_FOUND });
      }

      await this.useCase.delete(email);

      return res.sendStatus(200);
    } catch {
      return res.status(500).json({ message: MSG.INTERN_SERVER_ERROR });
    }
  }
}
