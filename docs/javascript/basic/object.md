## Object.assign()

### 参数
`target`  
目标数组，接收源对象的对象，也是返回值  
`source`  
源对象

::: details
```javascript
Object.assign<T extends {}, U>(target: T, source: U): T & U (+3 overloads)

let obj = { a: '111', b: '222' }
console.log(Object.assign(obj, { c: '333' }), obj);
//{ a: '111', b: '222', c: '333' } { a: '111', b: '222', c: '333' }
```
:::

## Object.defineProperties()

### 参数
`o`  
目标对象，返回值  
`properties`  
定义目标对象的属性以及属性描述符  
&emsp;`writable`是否可读写，默认false  
&emsp;`configurable`能否删除该属性，默认false  
&emsp;`enumerable`枚举该对象的属性时该属性显示，默认false，控制台打印无法看到  
&emsp;`value`属性默认值，默认undefind  
&emsp;`get`该属性的getter函数，默认undefind  
&emsp;`set`该属性的setter函数，默认undefind  


::: details
```javascript
ObjectConstructor.defineProperties<any>(o: any, properties: PropertyDescriptorMap & ThisType<any>): any

let obj = { a: '111', b: '222' }

Object.defineProperties(obj, {
    'c': {
        writable: true,
        configurable: true,
        enumerable: true,
        value: '333',
    },
    'd': {
        writable: false,
        configurable: false,
        enumerable: false,
        value: '444'
    }
})
console.log(obj, obj.d);
// { a: '111', b: '222', c: '333' } 444
obj.c = '555'; obj.d = '666'
console.log(obj, obj.d);
// { a: '111', b: '222', c: '555' } 444
delete (obj.c); delete (obj.d)
console.log(obj, obj.d);
// { a: '111', b: '222' } 444
```
:::

## Object.entries()
### 参数
`o`  
可以返回键值对数组的对象   

### 返回值
键值对数组，可以转换为[Map](./map.md)
:::details
```javascript
ObjectConstructor.entries<string>(o: {
    [s: string]: string;
} | ArrayLike<string>): [string, string][] (+1 overload)

let obj = { a: '111', b: '222' }

console.log(Object.entries(obj));
// [ [ 'a', '111' ], [ 'b', '222' ] ]
```
:::

