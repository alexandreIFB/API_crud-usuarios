import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    const { email, name } = request.body;

    return response
      .status(201)
      .json(this.createUserUseCase.execute({ email, name }));
  }
}

export { CreateUserController };
