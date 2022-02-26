import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name } = request.body;

    try {
      const createUserUseCase = container.resolve(CreateUserUseCase)

      const user = await createUserUseCase.execute({ email, name });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateUserController };
