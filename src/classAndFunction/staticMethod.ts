class StaticMethod {
  normalField: string = "a";
  static staticField: string;

  static getInstance() {
    return this.staticField;
  }
}
