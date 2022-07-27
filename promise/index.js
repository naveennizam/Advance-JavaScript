let prom = () => {
    return new Promise((resolve, reject) => {
        let a = "100";
        if (a == 100) {
            resolve(`It is success`)
        }
        else {
            reject(`It is fail`)
        }
    })
};
let success = (res) => {
    document.write (` <h1>Promise Function</h1>`)
    console.log(res)
}
let fail = (er) =>{ 
    console.log(`cool ${er}`)
}

prom(true).then(success).catch(fail)

let z = () => {
    return new Promise ((fulfill,not_fulfill) =>{
        
        if (5 < 4){
            fulfill(`Ok`)
        }
        else{
           not_fulfill(`Well doesn't matter `);
        }

    })
}
let d = (f) => {
    console.log (f)
}
let e = (f) => {
    console.log (f)
}

z(true).then(d).catch(e)