const Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Asynchronous task 1")
    }, 500);
    
})

const Promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Asynchronous task 2")
    }, 1000);
})


const Promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Asynchronous task 3")
    }, 700);
})

const promises1 = [Promise1, Promise2, Promise3]
Promise.all(promises1)
    .then((result) => {
        console.log(`Resolve:   ${value}`)

    })
    .catch((err) => {
        console.log("Error")

    });

Promise.allSettled(promises1)
    .then((result) => {
        console.log(result)

    })
    .catch((err) => {
        console.log("Error")

    }); 
    
Promise.race(promises1)
    .then((result) => {
        console.log(`Promise.race:  ${result} run then condition, REJECT time is high`)

    })
    .catch((err) => {
        console.log(`Promise.race: Error:  REJECT time is low`)

    }); 
    
Promise.any(promises1)
    .then((result) => {
        console.log(`Promise.any:  ${result}`)

    })
    .catch((err) => {
        console.log("Error")

    });