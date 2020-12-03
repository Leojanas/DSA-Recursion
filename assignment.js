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

function triangularNumber(number){
    if(number < 1){
        return console.log('Number must be a positive integer.')
    }
    if(number === 1){
        return 1
    }
    return number + triangularNumber(number-1)
}
console.log(triangularNumber(5))

/*function stringSplitter(string, separator){
    if(string.length === 1){
        if(string.charAt(0) === separator){
            return ''
        }
        return string
    }
    if(string.charAt(0) === separator){
        return [string.substring(1,string.length -1)]
    }
}*/

function fibonacci(number){
    if(number < 1){
        return 0
    }
    if(number === 1){
        return 1
    }
    return fibonacci(number-1) + fibonacci(number -2)
}
console.log(fibonacci(10))

function factorial(number){
    if(number === 1){
        return 1
    }
    return number*factorial(number-1)
}
console.log(factorial(8))

function mazeExit(array, horPosition, vertPosition){
    if(array[vertPosition + 1][horPosition] === 'e'){
        return 'D'
    }else if(array[vertPosition][horPosition+1] === 'e'){
        return 'R'
    }else{
    if(array[vertPosition][horPosition+1] === ' '){
        horPosition = horPosition + 1
        return 'R'.concat(mazeExit(array, horPosition, vertPosition))
    }else if(array[vertPosition + 1][horPosition] === ' '){
        vertPosition = vertPosition + 1
        return 'D'.concat(mazeExit(array, horPosition, vertPosition))
    }else if(array[vertPosition][horPosition-1] === ' '){
        horPosition = horPosition-1
        return 'L'.concat(mazeExit(array, horPosition, vertPosition))
    }else{
        return console.log('No path found.')
    }
}
}
console.log(mazeExit([
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
], 0, 0))

function allMazeExits(array, horPosition, vertPosition){
    if(array[vertPosition + 1][horPosition] === 'e'){
        return 'D'
    }else if(array[vertPosition][horPosition+1] === 'e'){
        return 'R'
    }else{
    if(array[vertPosition][horPosition+1] === ' '){
        horPosition = horPosition + 1
        return 'R'.concat(allMazeExits(array, horPosition, vertPosition))
    }
    if(array[vertPosition + 1][horPosition] === ' '){
        vertPosition = vertPosition + 1
        return 'D'.concat(allMazeExits(array, horPosition, vertPosition))
    }
    if(array[vertPosition][horPosition-1] === ' '){
        horPosition = horPosition-1
        return 'L'.concat(allMazeExits(array, horPosition, vertPosition))
    }
    if(array[vertPosition-1][horPosition] === ' '){
        vertPosition = vertPosition-1
        return 'U'.concat(allMazeExits(array, horPosition, vertPosition))
    }}
}
console.log(allMazeExits([
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
], 0, 0))

function anagrams(word){
    if(word.length === 1){
        return word
    }
    for(let i=0; i<word.length; i++){
        let letter = word.charAt(i)
        return letter.concat(anagrams(word.substring(1, word.length-1)))
    }
}
console.log(anagrams('word'))

function binary(number){
    if(number === 0){
        return '0'
    }
    if(number === 1){
        return '1'
    }
    if(number%2 === 0){
        return binary(number/2).concat('0')
    }
    return binary((number-1)/2).concat('1')
}
console.log(binary(23))