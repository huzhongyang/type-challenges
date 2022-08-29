// export type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
export type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never
