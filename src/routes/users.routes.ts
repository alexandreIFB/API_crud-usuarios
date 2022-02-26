import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/User/createUser/CreateUserController";
import { ListAllUsersController } from "../modules/users/useCases/User/listAllUsers/ListAllUsersController";
import { ShowUserProfileController } from "../modules/users/useCases/User/showUserProfile/ShowUserProfileController";
import { TurnUserAdminController } from "../modules/users/useCases/User/turnUserAdmin/TurnUserAdminController";

const createUserController = new CreateUserController()
const listAllUsersController = new ListAllUsersController()
const showUserProfileController = new ShowUserProfileController()
const turnUserAdminController = new TurnUserAdminController()

const usersRoutes = Router();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/:user_id/admin", turnUserAdminController.handle);

usersRoutes.get("/:user_id", showUserProfileController.handle);

usersRoutes.get("/", listAllUsersController.handle);

export { usersRoutes };
