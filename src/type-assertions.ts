export {};

let name: any = 'Ham';

// 型アサーション
let length = (name as string).length ;
// let length = (<string>name).length ;
// 大なり小なりの型アサーションはJSX と似ているので、利用は非推奨

// length = 'foo';