let a = function(){
    document.write(`<h3>Normal funtion</h3>`)
}
a()
document.write(`let a = function(){ <br>
    document.write('Normal funtion') <br>
} <br> <br>
a()  -- calling Funtion <br> <br>
let function b() { <br>
    document.write('Normal funtion') <br>
} <br> <br>
b()  -- calling Funtion <br> <br>`)

let hello = () => document.write(`<h1>Arrow Function</h1>`)
hello()
document.write(`let hello = () => document.write('Pattern of Arrow Function') <br> <br>
hello() -- calling Function`)