export {};

type Pitcher1 = {
    throwingSpeed: number;
}
type Batter1 = {
    battingAverage: number;
}

const DaimajinSasaki: Pitcher1 = {
    throwingSpeed: 154
}

const OchiaiHiromitsu: Batter1 = {
    battingAverage: 0.367
}
// 大谷翔平のような人向け
// type TwoWayPlayer = {
//     throwingSpeed: number;
//     battingAverage: number;
// }

// インターセクション型
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.286
}