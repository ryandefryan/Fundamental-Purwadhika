// [COUNT DUPLICATE CHARS]
// Status : Done

function duplicateCount(text){
    text = text.toLowerCase()
    var countAlphabets = {}

    for(var i=0; i<text.length; i++){
        var alpha = text[i]

        if(Object.keys(countAlphabets).includes(alpha)){
            countAlphabets[alpha]++
        }else{
            countAlphabets[alpha] = 1
        }
    }

    var numOfDuplicate = 0
    
    for(var prop in countAlphabets){
        if(countAlphabets[prop] > 1){
            numOfDuplicate++
        }
    }

    return numOfDuplicate
}

console.log(duplicateCount('abcde')) // Hasil 0, Karena Tidak Ada Alphabet Yang Duplicate
console.log(duplicateCount('abcdeabaaae')) // Hasil 3, Karena Alphabet a, b, e Duplicate