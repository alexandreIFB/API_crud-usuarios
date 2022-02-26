import { UsersRepository } from "../../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { container, injectable } from "tsyringe";
import { User } from "../../../entities/User";

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateUserUseCase {

  async execute({ email, name }: IRequest): Promise<User> {
    if (!name || !email) {
      throw new Error("Invalid data");
    }

    const usersRepository: IUsersRepository = container.resolve(UsersRepository)

    const userAlreadyExist = await usersRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new Error("User Already Exist");
    }

    const user = usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
