import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    if (!name || !email) {
      throw new Error("Invalid data");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
