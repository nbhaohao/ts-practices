// infer 写在参数上
type inferParamsType<T> = T extends (params: infer P) => void ? P : string;
type A = inferParamsType<(params: { name: string }) => void>; // {name: string}
type B = inferParamsType<number>; // string

// infer 写在返回值上
type inferReturnType<T> = T extends (params: any) => infer P ? P : string;
type C = inferReturnType<(params: { name: string }) => string>; // string
type D = inferReturnType<number>; // string
