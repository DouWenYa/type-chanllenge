namespace MyParameters{
    const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType1 = MyParameters1<typeof foo> // [arg1: string, arg2: number]
type FunctionParamsType2 = MyParameters2<typeof foo> // [arg1: string, arg2: number]

type MyParameters1<T extends (...args:any[])=>any>= T extends (...args:infer F)=>any?F:never
type MyParameters2<T extends Function>= T extends (...args:infer F)=>any?F:never
}