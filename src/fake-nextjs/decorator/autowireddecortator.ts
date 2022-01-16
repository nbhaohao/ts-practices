import "reflect-metadata";

type MyPropDecorator = (
  targetClassPrototype: any,
  propertyKey: string | symbol
) => void;
export default function Autowired(injectId: string): MyPropDecorator {
  return (targetClassPrototype, propertyKey) => {
    let PropServiceImplementInstance: any;
    // PropClass=UserService类
    const PropServiceImplementClass = Reflect.getMetadata(
      "propClassInstance",
      targetClassPrototype,
      propertyKey
    );
    const metaSingleton = Reflect.getMetadata(
      "singleton",
      targetClassPrototype,
      propertyKey
    );
    if (metaSingleton) {
      PropServiceImplementInstance = PropServiceImplementClass;
    } else {
      PropServiceImplementInstance = new PropServiceImplementClass();
    }
    //  增加....
    Reflect.defineProperty(targetClassPrototype, propertyKey, {
      value: PropServiceImplementInstance,
    });
  };
}
