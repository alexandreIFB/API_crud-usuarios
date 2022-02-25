import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  // eslint-disable-next-line prettier/prettier
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    try {
      const userUpdated = await this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).json(userUpdated);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
