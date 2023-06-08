export {};

type Profile = {
    name: string;
    age?: number;
    zipCode: number;
};
// Utility 型
type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;