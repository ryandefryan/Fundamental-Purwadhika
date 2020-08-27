// [COUNT SMILEY FACES]
// Ketentuan :
//              1. Mencari Jumlah Emoticon Smile ( :) :D ;-D :~) )
// Status : Done

function countSmileys(arr) {
    countSmile = 0

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == ':)' || arr[i] == ':D' || arr[i] == ':-D' || arr[i] == ':~)'){
            countSmile += 1
        }
    }

    return countSmile
}

console.log(countSmileys([])) // Output: 0
console.log(countSmileys([':D',':~)',';~D',':)'])) // Output: 3