import { Inject } from "./InjectDecorator";
import { UserService } from "./UserService";
import { RequestMethodDecorator } from "./RequestMethodDecorator";
import { ControllerDecorator } from "./ControllerDecorator";

@ControllerDecorator
class Controller {
  constructor(
    @Inject("userService") private userService?: UserService,
    // @ts-ignore
    private count: string
  ) {}

  @RequestMethodDecorator("/login")
  public login() {}
}

export {};
