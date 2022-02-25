import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createUserUseCase: CreateUserUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name } = request.body;

    try {
      const user = await this.createUserUseCase.execute({ email, name });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateUserController };
