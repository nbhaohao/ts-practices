class FieldWithoutInitValue {
  // 在初始化和构造器中都没有赋值，必须要使用联合类型解决
  // public someField: string | undefined
  // TS2564: Property 'someField' has no initializer and is not definitely assigned in the constructor.
  // public someField: string;
  // 使用 !: 声明即可
  public fixedWay!: string;

  constructor() {}

  someMethod() {
    // this.someField = "123";
  }
}
