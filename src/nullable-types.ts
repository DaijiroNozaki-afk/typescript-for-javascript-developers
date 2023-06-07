export {};

// tsconfig.json の
// "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
// これがfalse にすると、エラーが出なくなる
// null で上書きできるようになると、型制限が効かなくなってコード管理が難しくなる
let profile: { name: string; age: number | null } = {
    name: 'Ham',
    age: null
}