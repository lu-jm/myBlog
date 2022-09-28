const map = new Map([['a', '111'], ['b', 12], [12, 'cc']])

map.forEach((value, key, map) => {
    if (key === 'aaa') {
        value = '222'
    }
    console.log(`map[${key}]=${value}`);
})

console.log(map);

