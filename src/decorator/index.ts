function FirstClassDecorator(targetCLass: any) {
  console.log("targetClass.name:", targetCLass.name);
  new targetCLass().buy();
}

function TestMethod(
  targetClass: any,
  methodName: string,
  dataProps: PropertyDescriptor
) {
  const tempMethod = dataProps.value;
  dataProps.value = function (...params: any[]) {
    console.log("插入自定义方法逻辑");
    tempMethod.apply(this, params);
  };
}

function TestField(targetClass: any, fieldName: string) {
  console.log("targetClass", targetClass);
  console.log("fieldName", fieldName);
}

// @FirstClassDecorator
class CustomService {
  @TestField
  name: string = "下单";
  @TestMethod
  buy() {
    console.log(`${this.name}购买`);
  }
}

new CustomService().buy();
