// [REVERSED STRINGS] / [MEMBALIKAN STRINGS]
// Membalik Kata
// Ex. World -> dlroW, Saya -> ayaS, Kamu -> umaK
// Status : Done

function reversedStrings(str){
    var result = ''

    for(var i = str.length-1; i >= 0; i--){
        result += (str[i])
    }
    
    return result
}

console.log(reversedStrings('aku'))