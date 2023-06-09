export {};

function add(a: number, b: number) {
    return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

//　<> 山かっこはレリクス型
type MyReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
) => infer R // infer は条件のある所に記載できる特殊なキーワード、戻り値の型を拾い上げる。infer (推論する) 
    ? R
    : any;