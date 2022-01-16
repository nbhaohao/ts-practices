import UserServiceImplement from "./UserServiceImplement";

export default class UserServiceInterface {
  public static getServiceImplementClass() {
    return UserServiceImplement;
  }
}
