import "reflect-metadata";
function Inject(serviceName: string): ParameterDecorator {
  return (target, fieldName, parameterIndex) => {
    console.log("target", target);
    const allDecorators = Reflect.getMetadata("design:paramtypes", target);
    const type = new allDecorators[parameterIndex]();
    console.log("allDecorators", allDecorators);
    console.log("user inject type", type);
  };
}

export { Inject };
