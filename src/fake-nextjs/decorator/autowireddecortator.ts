import "reflect-metadata";
import collectionInstance from "../collection";

type MyPropDecorator = (
  targetClassPrototype: any,
  propertyKey: string | symbol
) => void;
export default function Autowired(
  injectId: string,
  singleton: boolean = false
): MyPropDecorator {
  return (targetClassPrototype, propertyKey) => {
    // PropClass=UserService类
    const PropServiceImplementClass = Reflect.getMetadata(
      "design:type",
      targetClassPrototype,
      propertyKey
    );
    const propClass = PropServiceImplementClass.getServiceImplementClass();
    let propClassInstance;
    if (singleton) {
      propClassInstance = propClass.getInstance();
    } else {
      propClassInstance = new propClass();
    }
    // collectionInstance.set(propertyKey, PropClassInstance);
    //  增加....
    Reflect.defineProperty(targetClassPrototype, propertyKey, {
      value: propClassInstance,
    });
  };
}
