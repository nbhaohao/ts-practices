import { Inject } from "./InjectDecorator";
import { UserService } from "./UserService";

class Controller {
  @Inject("userService")
  private userService?: UserService;

  public login() {}
}

export {};
