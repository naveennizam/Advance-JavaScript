let ele = document.querySelector(".a")
let text = `<h2>Template Literal</h2>
<h4>Synonyms</h4> 
<ul>
<li>Template Strings</li>
<li>Template Strings</li>
<li>Back-Tics Syntax</li>
</ul>`
ele.insertAdjacentHTML("beforeend",text)

let p = `"Back tic used for string which" can handle inverted commas."`
document.querySelector(".b").innerHTML = p

let cr = document.createElement("h2")
let eate  = document.createTextNode("String Interpolation")
cr.appendChild(eate)
document.querySelector(".c").appendChild(cr)

let st = "This Method is called String Interpolation ${variable}"
document.querySelector(".d").innerHTML = st


let head = "By the looop"
let tags = ["JavaScript ", "Advance JavaScript", "es6"];

let gh = `<h2>${head} </h2>`
for (let x of tags){
    gh += `<ul><li>${x}</li></ul> `
}
document.querySelector(".demo").innerHTML = gh
