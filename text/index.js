function Task() {
    console.log(1);
    setTimeout(() => {
        console.log(2);
    }, 0);
    new Promise((resolve,reject)=>{
        console.log(3);
        setTimeout(() => {
            console.log(4);
        }, 0);
        resolve()
    }).then(()=>{
        console.log(5);
    })
    console.log(6);
}

Task()

// 1 3 6 5 2 4