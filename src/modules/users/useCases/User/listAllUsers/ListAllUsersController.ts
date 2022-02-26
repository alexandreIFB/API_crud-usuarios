import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.headers;

    try {
      const users = await this.listAllUsersUseCase.execute({ user_id } as {
        user_id: string;
      });

      return response.json(users);
    } catch (err) {
      return response.status(400).json({
        error: err.message,
      });
    }
  }
}

export { ListAllUsersController };
