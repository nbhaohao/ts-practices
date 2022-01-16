export default class UserServiceImplement {
  static instance: UserServiceImplement;

  static getInstance() {
    if (!this.instance) {
      this.instance = new UserServiceImplement();
    }
    return this.instance;
  }
  Login(username: string, pwd: string, role: string) {
    console.log("进入service ...Login,username:", username);

    if (username === "admin" && pwd === "123" && role === "admin") {
      return true;
    } else {
      return false;
    }
  }
  register() {
    console.log("usersevice...register");
  }
}
