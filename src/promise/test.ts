import { MyPromise } from "./index";

const promise = new MyPromise((resolve, reject) => {
  resolve("成功了");
});

promise.then(
  (value) => {
    console.log("test resolveThen", value);
  },
  (value) => {
    console.log("test rejectThen", value);
  }
);
