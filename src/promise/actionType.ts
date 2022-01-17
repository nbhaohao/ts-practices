export type ResolveType = (value: any) => void;
export type RejectType = (value: any) => void;
export type Executor = (resolve: ResolveType, reject: RejectType) => void;
