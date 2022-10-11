const str='hello world!'

console.log(str.endsWith('d!'));
// true
console.log(str.endsWith('world!'));
// true
console.log(str.endsWith('world!',11));
// false
console.log(str.endsWith('world!',12));
// true
console.log(str.includes('hello'));
// true
console.log(str.includes('hello',1));
// false