import Autowired from "../decorator/autowireddecortator";
import CollectionInstance from "../collection";
import UserServiceInterface from "../service/UserServiceInterface";
import UserServiceImplement from "../service/UserServiceImplement";
// 装饰器执行顺序： 1.属性装饰器==>2.方法参数装饰器==>3.方法装饰器===>4.类装饰器
class UserController {
  @Autowired("userServiceInterface", true) //  修改Inject 为更专业的 Autowired 单词
  private userServiceInterface!: UserServiceInterface; // 修改Inject 为更专业的 Autowired 单词

  public login(): void {
    // 增加....
    const userServiceImplement: UserServiceImplement = this
      .userServiceInterface as UserServiceImplement;
    userServiceImplement.register();
  }
}
let controller = new UserController();
controller.login();
export {};
