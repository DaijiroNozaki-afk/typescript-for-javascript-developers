export {};

// ここで型制約を設けているので、下記の二種類の型以外ははじかれるようになった
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
    console.log(typeof value)
    if (typeof value === 'number') {
        return value * 3;
    } else {
        return value + value;
    }
};


// function double (value: string): string {
//     return value + value;
// };
// シグネチャ、概略

console.log (double (100));
console.log (double('Go '));
// console.log (double(true)); // string でもnumber でもないのでエラーが出る、型安全が確保されている
