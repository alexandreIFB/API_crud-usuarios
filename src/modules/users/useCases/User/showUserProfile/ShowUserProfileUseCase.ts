import { User } from "modules/users/entities/User";
import { UsersRepository } from "../../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { container } from "tsyringe";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {

  async execute({ user_id }: IRequest): Promise<User> {
    const usersRepository: IUsersRepository = container.resolve(UsersRepository)


    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User not exists");
    }

    return user;
  }
}

export { ShowUserProfileUseCase };
