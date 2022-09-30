# 闭包
js中闭包会随函数的创建形成，内部函数可以访问外部函数的变量称之为闭包

## 作用域
闭包主要是作用域问题，与是否return无关，但是在实际使用中往往需要使用`return`，如下例子就是一个闭包。
```javascript
function init() {
    let a = '1'  //外部函数变量
    function show() {//内部函数，一个闭包
        console.log(a);//访问外部变量
    }
    show()
}
```
## return
使用return返回闭包函数，下面例子执行init()函数后，变量a还可以访问，并未销毁。
```javascript
function init() {
    let a = '1'
    return function () {
        console.log(a);
    }
}

const __init = init()
__init()
// 1
```

## 实用的闭包
闭包类似于面向对象编程，例如java中实例化一个类，相当于重新开辟一块内存，可以对这个实例的变量进行操作，还可定义私有化变量，不过javascript没有原生支持，可以通过模拟方法来实现。
```javascript
function Count() {//私有化变量
    let num = 0
    function changeNum(val) {
        num += val
    }
    return {
        increment: function () {
            changeNum(1);
        },
        decrement: function () {
            changeNum(-1);
        },
        value: function () {
            return num;
        }
    }
}

const count = Count()
console.log(count.value());
//0
count.increment()
console.log(count.value());
//1
```






