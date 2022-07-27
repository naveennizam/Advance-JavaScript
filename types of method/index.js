let fun = () =>{ 
    document.write(`<h1>Types of Method </h1>
    <ol>
    <li> <h3>Constructor()</h3> <p>Call automatic by object</p></li>
    <li> <h3>Prototype:</h3> <p>Have to call by object</p></li>
    <li> <h3>Static:</h3> <p>Without Object can be called</p></li>
    </ol>`)

}

fun()

class hello{
    constructor(){
        console.log("constructor")
    }
    message(){
    console.log("prototype");
    }
    static student(){
        console.log("Static");
    }
    
}
let a = new hello() // (constructor)
a.message(); // by object (prtotype)
hello.student() // without object (static)
