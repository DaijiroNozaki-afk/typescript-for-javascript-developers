export {};

// コンストで初期化する
let name = 'Atsushi';

name = 'Ham';

// 事実上の定数になる
let nickname = 'Ham' as const;
// nickname = 'Hamtaro';

// 全てのプロパティがreadonly になる
let profile = {
    name: 'Atsushi',
    height: 178
} as const;

// profile.name = 'Ham';
// profile.height = 180;

