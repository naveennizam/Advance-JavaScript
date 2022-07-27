class hello {  // it is class
    message() {  // it is method
        console.log("Hello")
        document.write(`<h1>OOP function </h1>
        <ol>
        <li>It is Well organize</li>
        <li>Code more modular and reuseable</li>
        <li>Easier to debug</li>
        <li>Best medium to large project</li>
         </ol>`)
    }

}
let a = new hello();   // it is object

a.message();