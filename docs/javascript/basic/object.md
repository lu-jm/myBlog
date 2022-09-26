# Object.assign()

## 参数
`target`  
目标数组，接收源对象的对象，也是返回值  
`source`  
源对象

::: details
```javascript
Object.assign<T extends {}, U>(target: T, source: U): T & U (+3 overloads)

let obj = { a: '111', b: '222' }
console.log(Object.assign(obj, { c: '333' }));
//{ a: '111', b: '222', c: '333' }
```
:::