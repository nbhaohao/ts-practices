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

// @FirstClassDecorator
class CustomService {
  name: string = "下单";
  @TestMethod
  buy() {
    console.log(`${this.name}购买`);
  }
}

new CustomService().buy();
