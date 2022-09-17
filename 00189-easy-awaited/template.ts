export type MyAwaited<T> = T extends Promise<infer U>
    ? U extends Promise<any>
        ? MyAwaited<U>
        : U
    : never
