# Map
## Map.set()&&Map.get()&&Map.clear()
```javascript
const map = new Map()

map.set('a', '11')
map.set('b', 12)
map.set(12, true)

console.log(map);
//Map(3) { 'a' => '11', 'b' => 12, 12 => true } 3
console.log(map.get('b'));
//12
map.clear()
console.log(map, map.size);
// Map(0) {} 0
```
## Map.has()&&Map.delete()
```javascript
const map = new Map()

map.set('a', '11')
map.set('b', 12)
map.set(12, true)

console.log(map.has('b'));
// true
map.delete('b')
console.log(map, map.size);
// Map(2) { 'a' => '11', 12 => true } 2
```

## Map.entries()&&Map.keys()
均返回一个迭代器对象，keys()返回每个元素key的[迭代器](./iterator.md)
```javascript
const map = new Map()

map.set('a', '11')
map.set('b', 12)
map.set(12, true)

const it = map.entries()
console.log(it.next().value);
// [ 'a', '11' ]
console.log(it.next().value);
// [ 'b', 12 ]
const it_1 = map.keys()
console.log(it_1.next().value);
// 'a'
```

## Map.forEach()
按照插入顺序遍历map对象
### 参数
`callbackfn`  
&emsp;`value`键值  
&emsp;`value`键名  
&emsp;`value`map对象
```javascript
forEach(callbackfn: (value: string, key: string, map: Map<string, string>) => void, thisArg?: any): void

const map = new Map([['a', '111'], ['b', 12], [12, 'cc']])

map.forEach((value, key, map) => {
    if (key === 'aaa') {//error无法修改
        value = '222'
    }
    console.log(`map[${key}]=${value}`);
})
// map[a]=111
// map[b]=12
// map[12]=cc
console.log(map);
// Map(3) { 'a' => '111', 'b' => 12, 12 => 'cc' }

```