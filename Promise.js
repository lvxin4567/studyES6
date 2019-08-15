function timeout(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject(new Error('fail'));
        }, ms);
    });
}
timeout(100).then((value) => {
    console.log(value)
}, (error) => {
    console.log(error);
})

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("throw a error"))
    }, 2000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2");
    }, 1000);
})

// p2.then(value => console.log(value) , error => console.log(error));

// const p = Promise.all([p1, p2]);
// p.then(value=>console.log(value)).catch(error=>console.log(error));

const p = Promise.race(p1,p2);
p.then(value=>console.log(value)).catch(error=>console.log(error));


