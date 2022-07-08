var a = document.createElement("h1")
var child = document.createTextNode('Variable')
a.appendChild(child)
console.log(a)
document.querySelector("#a").appendChild(a)

let b = document.querySelector("#b");
let c = `<ol>
<li><b>var </b> </li>
<li><b>let </b> </li>
<li><b>const </b> </li>
</ol>`
b.insertAdjacentHTML("afterend", c);



var x = 'hello';
var x = 'Redeclare by var';
document.write(x +'<br>')
var z = 'cool'
document.write( z='reassign by var');

let y = 'this is variable'
 y = `Reassign by let but it can't be Redaclare.`
 document.write('<br>', y)

 const r = `Const can't be redaclare or Reassign`;
document.write('<br>'+r)
