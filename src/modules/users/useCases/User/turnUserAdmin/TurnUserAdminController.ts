import { Request, Response } from "express";
import { container } from "tsyringe";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    try {
      const turnUserAdminUseCase = container.resolve(TurnUserAdminUseCase)

      const userUpdated = await turnUserAdminUseCase.execute({ user_id });

      return response.status(200).json(userUpdated);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
