export type TupleToObject<T extends readonly (string | number)[]> = {
    [K in T[number]]: K
}

type A = [1, 2, 'str']

type  B = TupleToObject<A>
