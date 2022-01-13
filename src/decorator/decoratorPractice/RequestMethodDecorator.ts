import "reflect-metadata";

export function RequestMethodDecorator(requestPath: string): MethodDecorator {
  return (target, propertyKey, dataDescriptor) => {
    // 把请求路径作为元数据定义到方法上
    Reflect.defineMetadata("requestPath", requestPath, target, propertyKey);
  };
}
