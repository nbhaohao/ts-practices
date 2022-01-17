import { Executor, RejectType, ResolveType } from "./actionType";

export class MyPromise<T = any> {
  public resolve!: ResolveType;
  public reject!: RejectType;
  public status!: "pending" | "success" | "fail";
  public resolveExecutorResult!: any;
  public rejectExecutorResult!: any;
  constructor(executor: Executor) {
    this.status = "pending";
    this.resolve = (value: any): any => {
      if (this.status !== "pending") {
        return;
      }
      this.status = "success";
      this.resolveExecutorResult = value;
      console.log(`resolve value ${value}`);
    };
    this.reject = (value: any): any => {
      if (this.status !== "pending") {
        return;
      }
      this.status = "fail";
      this.rejectExecutorResult = value;
      console.log("reject value ${value}");
    };
    executor(this.resolve, this.reject);
  }

  then(resolveThen: ResolveType, rejectThen: RejectType) {
    if (this.status === "success") {
      resolveThen(this.resolveExecutorResult);
      console.log("resolveThen 被执行");
    } else if (this.status === "fail") {
      rejectThen(this.rejectExecutorResult);
      console.log("rejectThen 被执行");
    }
  }
}
