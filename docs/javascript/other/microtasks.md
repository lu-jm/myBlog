# 微任务
javascript本质上是一门单线程语言,为了能够满足多线程需求,js引入了`setTimeout()`和`setInterval()`,也就是微任务的概念。  
js程序执行是由一个个事件循环组成的，在其中一个循环中，js会先执行任务(宏任务)，再执行微任务。  
常见的宏任务包括：`setTimeout()`、`setInterval()`、`setImmediate`、`Ajax`、`DOM事件`  
常见的微任务包括：`process.nextTick`、`MutationObserver`、`Promise.then catch finally`

## 例
```javascript
function Task() {
    console.log(1);//同步
    setTimeout(() => { //异步，宏任务
        console.log(2);
    }, 0);
    new Promise((resolve,reject)=>{//同步，微任务
        console.log(3);
        setTimeout(() => {//异步，宏任务
            console.log(4);
        }, 0);
        resolve()
    }).then(()=>{ //异步，微任务
        console.log(5);
    })
    console.log(6);//同步
}

Task()

// 1 3 6 5 2 4
```

上面例子代码的执行说明：  
1、console.log(1)是同步代码直接执行，`输出1`；setTimeout是异步代码，放到执行队列中；new Promise是同步代码，`输出3`，其中的setTimeout是异步代码，放到执行队列；then是异步代码，放进任务队列；console.log(6)是同步代码，`输出6`。  
2、经过上述执行，任务队列中还有如下任务：
```javascript
setTimeout(() => { //异步，宏任务
    console.log(2);
}, 0);
setTimeout(() => {//异步，宏任务
    console.log(4);
}, 0);
then(()=>{ //异步，微任务
    console.log(5);
})
```
异步微任务要先于异步宏任务执行，接下来执行then函数，输出5；然后顺序执行两个异步宏任务，分别`输出2、4`。