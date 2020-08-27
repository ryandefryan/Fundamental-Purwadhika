// [SHORTEST WORD]
// Mencari Kata Terpendek
// Status : Done

function findShort(s){
    var totalS = s.split(' ')
    var lengthWord = 0

    for(var i = 0; i < totalS.length; i++){
        if(i == 0){
            lengthWord = totalS[i].length
        }
        if(totalS[i].length <= lengthWord){
            lengthWord = totalS[i].length
            s = totalS[i]
        }
    }

    return lengthWord
}

console.log(findShort("Bitcoin take over the world maybe who knows perhaps")) // Output: 3 (Dari kata "who")