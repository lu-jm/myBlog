function Count() {
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

count.increment()
console.log(count.value());