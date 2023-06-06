export {};

class Person {
    public name: string;
// インスタンスに対して呼び出しを禁止にできる
    // private age: number;
    protected age: number;
// 派生クラス、子供のクラスから継承したものからでも参照ができる
    protected nationality: string;
    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`; // このage はクラス内部で参照しているので、エラーが起きない
    }
}

class Android extends Person {
    constructor(name: string, age: number, nationality: string) {
        super(name, age, nationality);
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`; // このage はクラス内部で参照しているので、エラーが起きない
    }

}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
// let hanako = new Person();
