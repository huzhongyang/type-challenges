export type Push<T extends any[], U> = [...T, U]
type a = Push<[1, 2, 3], 5>
