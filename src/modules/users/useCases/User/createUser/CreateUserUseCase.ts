import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  async execute({ email, name }: IRequest): Promise<User> {
    if (!name || !email) {
      throw new Error("Invalid data");
    }

    const userAlreadyExist = await this.usersRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new Error("User Already Exist");
    }

    const user = this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
