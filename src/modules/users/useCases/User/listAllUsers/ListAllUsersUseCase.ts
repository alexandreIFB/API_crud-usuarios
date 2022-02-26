import { User } from "modules/users/entities/User";
import { UsersRepository } from "../../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { container } from "tsyringe";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  async execute({ user_id }: IRequest): Promise<User[]> {
    const usersRepository: IUsersRepository = container.resolve(UsersRepository)

    const user = await usersRepository.findById(user_id);

    const userIsAdmin = user.admin;

    if (!userIsAdmin) {
      throw new Error("User is not admin");
    }

    const users = await usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
