import { MyPromise } from "./index";

const promise = new MyPromise((resolve, reject) => {
  resolve("ζεδΊ");
});

promise.then(
  (value) => {
    console.log("test resolveThen", value);
  },
  (value) => {
    console.log("test rejectThen", value);
  }
);
