function countSheep(number){
    if(number === 0){
        return console.log('All sheep have jumped the fence.')
    }
    console.log(`${number} : Another sheep jumps the fence.`)
    number = number -1;
    countSheep(number)
}
countSheep(4)

function powerCalculator(base, exponent){
    if(exponent < 0){
        return console.log('Exponent should be >= 0.')
    }
    if(exponent === 0){
        return console.log(1)
    }
    if(exponent === 1){
        return base
    }else{
        exponent = exponent-1;
        return base*powerCalculator(base, exponent)
    }
}
console.log(powerCalculator(10,1))

function reverseString(string){
    if(string.length === 1){
        return string
    }
    let newString = string.substring(0, string.length - 1)
    let char = string.charAt(string.length -1)
    return char.concat(reverseString(newString))
}
console.log(reverseString('Hello'))

