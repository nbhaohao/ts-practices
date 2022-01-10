interface CustomType {
  name: string;
}

function isCustomType(object: any): object is CustomType {
  return "name" in object;
}

function test(object: Object) {
  if (isCustomType(object)) {
    const name = object.name
  } else {
    // TS2339: Property 'name' does not exist on type 'Object'.
    // const name = object.name
  }
}
