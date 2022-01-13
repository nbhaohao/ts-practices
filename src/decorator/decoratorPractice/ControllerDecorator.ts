const ControllerDecorator: ClassDecorator = (target) => {
  Object.keys(target.prototype).forEach((methodName: string) => {
    console.log("methodName", methodName);
    const path = Reflect.getMetadata(
      "requestPath",
      target.prototype,
      methodName
    );
    console.log("path", path);
  });
};

export { ControllerDecorator };
