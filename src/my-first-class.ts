export {};

class Person {
    name: string;
    age: number;

    // コンストラクタは戻り値がないから、戻り値の型の指定は必要ない
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`
    }
}

let taro = new Person('Taro', 30);
console.log(taro.profile());
// let hanako = new Person();

// コンストラスタメソッド、引数がコンストラクタメソッドとして利用される