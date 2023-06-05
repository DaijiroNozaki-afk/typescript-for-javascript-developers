export {};

// 別名の文字列に対しては、頭文字を大文字にする
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
    name: 'Ham',
    age: 43
};

type Profile = {
    name: string;
    age: number;
}

const example2: Profile = {
    name: 'Ham',
    age: 43
};

type Profile2 = typeof example1;

