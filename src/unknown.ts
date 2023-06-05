export {};

const kansu = () => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny  = numberAny + 10;
// 型安全を確保する
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10;
}

