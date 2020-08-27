// [REVERSED SENTENCE]
// Membalikan Kata Yang Memiliki Jumlah Karakter (.length) > 4
// Status : Done

function spinWords(sentence){
    var tempSentence = sentence.split(' ')
    var tempOutpur = []
    var output = ''

    for(var i = 0; i < tempSentence.length; i++){
        if(tempSentence[i].length >= 5){
            tempSentence[i] = tempSentence[i].split('').reverse().join('')
        }

        tempOutpur.push(tempSentence[i])
        output = tempSentence.toString()
        output = output.replace(/,/g, ' ')
    }

    return output
}

console.log(spinWords("Welcome Yes!"))