function FirstClassDecorator(targetCLass: any) {
  console.log("targetClass.name:", targetCLass.name);
  (new targetCLass()).buy();
}

@FirstClassDecorator
class CustomService {
  name: string = "下单";
  buy() {
    console.log(`${this.name}购买`);
  }
}
