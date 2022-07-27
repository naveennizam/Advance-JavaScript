let test = async () => `hello`
console.log(test())
test().then((res) => { console.log(res) })

let go = async () => {
    if (8 < 7) {
        return 'good'
    }
    if(5 > 7) {
        return 'bad'
    }  
    if (8==7){
        return 'none'
    }
    else{
        return 'goal'
    }
    

}
console.log(go())
go().then((red)=>{console.log(red);})


