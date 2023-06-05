export {};

// 関数にデフォルトの引数を設定する
const nextYearSarary = (currentSalary: number, rate: number = 1.1) => {
    return currentSalary * rate;
}
console.log(nextYearSarary(1000));