export {};

class Person {
    // アクセス修飾子をコンストラクタの引数に書くと、期待した結果が得られる
    constructor (public name: string, protected age: number) {
    }
}

const me = new Person('はむさん', 43);
console.log(me);