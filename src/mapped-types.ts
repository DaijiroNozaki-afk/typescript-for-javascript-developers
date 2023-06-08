export {};

type Profile = {
    name: string;
    age: number;
}

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

// 新しい型を作る
// 型を一つずつ取り出して、適用している
type Optional<T> = {
    [P in keyof T]?: T[P] | null;
};
type OptionalProfile = Optional<Profile>;
