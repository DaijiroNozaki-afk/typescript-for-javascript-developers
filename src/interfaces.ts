export {};

// type は型エイリアス
type ObjectType = { 
    name: string;
    age: number;
};
// interface はそれ自身単体で型定義ができる
interface ObjectInterface {
    name: string;
    age: number;
}
let object: ObjectInterface = {
    name: 'Ham-san',
    age: 43
}