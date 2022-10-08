# 微任务
javascript本质上是一门单线程语言,为了能够满足多线程需求,js引入了`setTimeout()`和`setInterval()`,也就是微任务的概念。
js程序执行是由一个个事件循环组成的，在其中一个循环中，js会先执行任务