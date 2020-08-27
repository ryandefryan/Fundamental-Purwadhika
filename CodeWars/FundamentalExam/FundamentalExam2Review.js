function findShort(sentence){
    sentence = sentence.split(' ')
    var lengthword = []

    for(var i = 0; i < sentence.length; i++){
        lengthword.push(sentence[i].length)
    }

    return Math.min(...lengthword)
}

console.log(findShort('Many people get up early in the morning'))



function persistance(num){
    num = String(num)
    var count = 0

    while(num.length > 1){
        var total = 1

        for(var i = 0; i < num.length; i++){
            total *= num[i]
        }

        count++
        num = String(total)
    }

    console.log(count)
}

persistance(39)
persistance(999)



function alphabetPosition(sentences){
    sentences = sentences.replace(/ /g, '')
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    var output = ''

    for(var i = 0; i < sentences.length; i++){
        var indexKe = alpha.indexOf(sentences[i]) + 1 + ' '
        if(indexKe > 0){
            output += indexKe
        }
    }

    return output
}

console.log(alphabetPosition('Budi pergi ke pasar'))



function multiplicationTable(row, col){
    var output = ''

    for(var i = 0; i < col; i++){
        var angka = i + 1
        for(var j = 0; j < row; j++){
            output += angka + ' '
            angka += i + 1
        }
        output += '\n'
    }
    console.log(output)
}

multiplicationTable(3,5)