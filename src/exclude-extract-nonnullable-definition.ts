export {};

type MyExclude = 
  (string extends string | number ? never : string) // never になる
| (number extends string | number ? never : number) // never になる
| (DebugType extends string | number ? never : DebugType); // faulse になってDebugType が残る
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;
// Distributive conditional types 


type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// ヌーラブルタイプ
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
