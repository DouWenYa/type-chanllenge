namespace unshift{
    type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
    type Unshift<T extends unknown[],K> = [K,...T]
}