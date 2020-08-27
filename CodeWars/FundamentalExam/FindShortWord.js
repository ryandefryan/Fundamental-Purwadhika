function findShort(str){
    var strArr = str.split(' ')
    var lengthWord = 0

    for(var i = 0; i < strArr.length; i++){
        if(i == 0){
            lengthWord = strArr[i].length
        }

        if(strArr[i].length < lengthWord){
            lengthWord = strArr[i].length
        }
    }

    return lengthWord
}

console.log(findShort('Many people get up early in the morning'))
console.log(findShort('Every office would getting newest monitor'))
console.log(findShort('Create new file after this morning'))