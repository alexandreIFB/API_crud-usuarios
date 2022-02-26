import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";
import { ShowUserProfileController } from "./ShowUserProfileController";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

export default (): ShowUserProfileController => {
  const usersRepository = new UsersRepository();
  const showUserProfileUseCase = new ShowUserProfileUseCase(usersRepository);
  const showUserProfileController = new ShowUserProfileController(
    showUserProfileUseCase
  );

  return showUserProfileController;
};
