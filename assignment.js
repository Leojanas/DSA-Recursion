function countSheep(number){
    if(number === 0){
        return console.log('All sheep have jumped the fence.')
    }
    console.log(`${number} : Another sheep jumps the fence.`)
    number = number -1;
    countSheep(number)
}
countSheep(4)
