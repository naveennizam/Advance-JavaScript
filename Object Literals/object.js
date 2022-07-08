var name = "Ali";
var course = 'BTech';

var obj={
    name,
    course,
};
console.log(obj)


var obj1={
    [course] : "Engineering"
};
console.log(obj1)

var obj2 = {
    detail: function(){
        return 'hello'
    },
    det(){
        return 'hi'
    }
}
console.log(obj2)
console.log(obj2.detail())
console.log(obj2.det())

console.log(obj2['det']())
document.write(obj2['det']())
document.write(obj.name)