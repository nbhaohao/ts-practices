type MyPropDecorator = (
  targetClassPrototype: any,
  propertyKey: string | symbol
) => void;
export default function Singleton(
  isSingleton: boolean = false
): MyPropDecorator {
  return (targetClassPrototype, propertyKey) => {
    const PropServiceImplementClass = Reflect.getMetadata(
      "design:type",
      targetClassPrototype,
      propertyKey
    );
    const propClass = PropServiceImplementClass.getServiceImplementClass();
    let propClassInstance;
    const metaSingleton = Reflect.getMetadata(
      "singleton",
      targetClassPrototype,
      propertyKey
    );
    if (isSingleton) {
      if (!metaSingleton) {
        Reflect.defineMetadata(
          "singleton",
          isSingleton,
          targetClassPrototype,
          propertyKey
        );
        propClassInstance = propClass.getInstance();
      } else {
        console.log("单件模式创建，使用了上一次的对象");
      }
    } else {
      propClassInstance = propClass;
    }
    Reflect.defineMetadata(
      "propClassInstance",
      propClassInstance,
      targetClassPrototype,
      propertyKey
    );
  };
}
