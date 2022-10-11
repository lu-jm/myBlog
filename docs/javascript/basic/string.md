# String
## string\.at()&&string.charAt()
参数  
`number`整数(包括负数)，用于返回第几个字符

::: details
```javascript
const str='xsdcdcc'

console.log(str.charAt(1));
// s
console.log(str.at(1))
// s
```
:::

## string.endsWith()&nbsp;&&&nbsp;string.includes()
### endswith
参数  
`str`需要查找的字符串  
`length`查找的长度，默认为目标字符串长度   
返回值：boolean,true表示找到，反之未找到

### includes
`str`需要查找的字符串  
`position`从当前哪个索引位置开始查找，默认为0   
返回值：boolean,true表示找到，反之未找到

::: details
```javascript
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
```
:::

