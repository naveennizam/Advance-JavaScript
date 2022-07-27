let test = async () => {
    console.log(`A`)
    console.log(`B`)
    setTimeout( () => {
         console.log(`C`)
    },1000) //1 milli second
    console.log(`D`)
    console.log(`E`)

}
console.log(`F`)
test()
console.log(`G`)


let go = async () => {
    console.log(`Apple`)
    console.log(`Ball`)
    await console.log(`Cat`)
    console.log(`Dog`)
    console.log(`Elephant`)

}
console.log(`Fish`)
go()
console.log(`Goat`)
