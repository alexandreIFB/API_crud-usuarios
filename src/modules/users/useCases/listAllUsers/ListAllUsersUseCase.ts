import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
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
