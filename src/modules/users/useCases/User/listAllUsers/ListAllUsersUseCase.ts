import { User } from "modules/users/entities/User";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  async execute({ user_id }: IRequest): Promise<User[]> {
    const user = await this.usersRepository.findById(user_id);

    const userIsAdmin = user.admin;

    if (!userIsAdmin) {
      throw new Error("User is not admin");
    }

    const users = await this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
