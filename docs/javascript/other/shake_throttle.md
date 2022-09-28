## 防抖
仅在最后一次触发后执行事件，例：输入框的input事件
```javascript
function antiShake(fnc, timeout) {//防抖函数
    console.log('ddd');
    let timer = null//形成闭包，参数不会销毁
    return function () {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(fnc, timeout);
    }
}
function inputChange() {
    console.log('s');
}
document.getElementById('input').addEventListener('input',antiShake(inputChange, 1000))
```

## 节流
在一定的间隔时间内只触发一次，例：多次点击按钮
### 定时器实现
```javascript
function throttle(fnc, timeout) {
    let timer = null
    return function () {
        if (!timer) {
            fnc()
            timer = setTimeout(() => {
                clearTimeout(timer)
                timer = null
            }, timeout)
        }
    }
}
function clickChange() {
    console.log('s')
}
document.getElementById('btn').addEventListener('click',throttle(clickChange, 1000))
```
### 时间戳实现
```javascript
function throttle(fnc, timeout) {
    let start_time = 0
    let end_timer = 0
    return function () {
        end_timer = new Date().getTime()
        if (end_timer - start_time >= timeout) {
            fnc()
            start_time = end_timer
        }
    }
}
function clickChange() {
    console.log('s')
}
document.getElementById('btn').addEventListener('click'throttle(clickChange, 1000))
```