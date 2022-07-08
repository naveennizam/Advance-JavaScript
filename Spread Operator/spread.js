var a = document.querySelector(".a")
a = document.write(`<h1> Spread Operation </h1>`)

let sum = (name,...arg) => {
    let sum = 0
    for (let i of arg) {
        sum += i
        
    }
    document.write(`<h2>Array is  ${arg} </h2>`)
       document.write(`<h2>Sum of Array is  ${sum} </h2>`)
}
var arr = [10,30,60,70,4545,1]
sum("hello",...arr)