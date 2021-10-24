export type GetArrayType<T> = T extends Array<infer U> ? U : never;
