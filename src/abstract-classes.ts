export {};

// 抽象メソッド
abstract class Animal {
    abstract cry(): string;
}
// 抽象メソッドは必ず継承する必要がある

class Lion extends Animal {
    cry() {
        return 'roar';
    }
}
// 非抽象クラス 'Tiger' はクラス 'Animal' からの継承抽象メンバー 'cry' を実装しません。ts(2515)
// 抽象メソッドがあることで、cry の実装漏れをエラーとして表示してくれる
// class Tiger extends Animal {
// }
class Tiger extends Animal {
    cry() {
        return 'grrrr';
    }
}
