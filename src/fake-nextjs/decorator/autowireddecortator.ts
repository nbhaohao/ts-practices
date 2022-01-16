import "reflect-metadata";
import collectionInstance from "../collection";

type MyPropDecorator = (
  targetClassPrototype: any,
  propertyKey: string | symbol
) => void;
export default function Autowired(injectId: string): MyPropDecorator {
  return (targetClassPrototype, propertyKey) => {
    // PropClass=UserService类
    const PropServiceImplementClass = Reflect.getMetadata(
      "design:type",
      targetClassPrototype,
      propertyKey
    );
    const PropClassInstance =
      new (PropServiceImplementClass.getServiceImplementClass())();
    // collectionInstance.set(propertyKey, PropClassInstance);
    //  增加....
    Reflect.defineProperty(targetClassPrototype, propertyKey, {
      value: PropClassInstance,
    });
  };
}
