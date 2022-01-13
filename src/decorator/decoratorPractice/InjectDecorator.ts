import "reflect-metadata";
function Inject(serviceName: string): PropertyDecorator {
  return (target, fieldName) => {
    console.log("target", target);
    console.log(Reflect.getMetadata("design:type", target, fieldName));;
  };
}

export { Inject };
