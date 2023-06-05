export {};

let bmi: (height: number, weight: number) => number = (
    height: number,
    weight: number
): number => weight / (height * height); //arrow 関数を使うと、1行で書けるならreturn を省略できる

console.log(bmi(1.78, 86));