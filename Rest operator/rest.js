var a = document.querySelector(".a")
a = document.write(`<h1> Rest Operation </h1>`)
function sum(name, ...arg) {
    let sum = 0
    document.write(`<h2>Array is  ${arg} </h2>`)
    for (let i of arg) {
        sum += i
    }

    document.write(`<h2>Sum of Array is  ${sum} </h2>`)

}
sum('hello', 20, 20, 10, 34, 556)

let hello = (...argu) => {
    console.log(argu)
    console.log(typeof argu)
}
hello(10, 20, 30, 40)