export {};

class Mahoutsukai {}
class Souryo {}

// TypeScript は1つのクラスしか継承できない、単一継承
class Taro extends Mahoutsukai {}

interface Kenja {
    ionazun(): void;
}

interface Senshi {
    kougeki(): void;
}

// implements で実装する
// 'Jiro' は宣言されましたが使用されませんでした。ts(6196)
// クラス 'Jiro' はインターフェイス 'Kenja' を正しく実装していません。
//   プロパティ 'ionazun' は型 'Jiro' にありませんが、型 'Kenja' では必須です。ts(2420)
// return-of-interfaces.ts(10, 5): 'ionazun' はここで宣言されています。
// クラス 'Jiro' はインターフェイス 'Senshi' を正しく実装していません。
//   プロパティ 'kougeki' は型 'Jiro' にありませんが、型 'Senshi' では必須です。ts(2420)
// return-of-interfaces.ts(14, 5): 'kougeki' はここで宣言されています。
// 型の実装忘れをすると、エラーメッセージを出してくれるので、実装漏れがなくなる
// class Jiro implements Kenja, Senshi {}
class Jiro implements Kenja, Senshi {
    ionazun(): void {
        console.log('ionazun');
    }

    kougeki(): void {
        console.log('kougeki');
    }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();