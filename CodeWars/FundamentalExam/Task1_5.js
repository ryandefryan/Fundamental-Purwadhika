// [TASK 5]
// Mencari Huruf Tengah Dari Beberapa Kata
// Ketentuan :
//              1. Apabila Panjang Kata ('length') Lebih Dari 2
//                 Bila Panjang Kata ('length') Kurang Dari 2, Maka Tidak Perlu Dicari
// Status : Done

function concateMiddle(sentences){
    var tempSentences = sentences.split(' ')
    var output = ''

    for(var i = 0; i < tempSentences.length; i++){
        if(tempSentences[i].length % 2 != 0 && tempSentences[i].length != 1){ // Apabila Panjang Kata Berjumlah Ganjil
            
            var tempSentence = tempSentences[i]
            var middleSentence = Math.floor(tempSentence.length / 2)
            output += tempSentence[middleSentence]
            
        }else if(tempSentences[i].length % 2 == 0 && tempSentences[i].length != 2){ // Apabila Panjang Kata Berjumlah Genap
            
            var tempSentence = tempSentences[i]
            var middleSentence = tempSentence.length / 2
            output += tempSentence[middleSentence - 1]
            output += tempSentence[middleSentence]

        }
    }

    return output
}

console.log(concateMiddle('hello world')) // Output: lr
console.log(concateMiddle('budi go to the market')) // Output: udhrk