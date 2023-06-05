export {};

let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1976 };

// {}波カッコは、プロパティについての型指定ができる
let profile2: {
    name: string;
}= { name: 'Ham' };
// profile2 = { birthYear: 1976 };
// 制約を強くする方が、エラーが少なくできる
profile2 = { name: 'Nimo' };