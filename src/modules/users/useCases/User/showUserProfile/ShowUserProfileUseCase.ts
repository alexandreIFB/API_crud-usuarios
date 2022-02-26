import { User } from "modules/users/entities/User";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User not exists");
    }

    return user;
  }
}

export { ShowUserProfileUseCase };
