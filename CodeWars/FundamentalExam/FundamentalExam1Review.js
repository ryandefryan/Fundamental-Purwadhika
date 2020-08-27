function sumOdd(numbers){
    var output = 0

    for(var i = 0; i < numbers.toString().length; i += 2){
        output += Number(numbers.toString()[i])
    }

    return output
}

console.log(sumOdd(540395))



function findUniqChar(sentence){
    // Hapus Spasi Dahulu
    var sentence = sentence.split(' ').join('')

    // Hitung Jumlah Tiap Char
    var obj = {}
    for(var i = 0; i < sentence.length; i++){
        if(Object.keys(obj).includes(sentence[i])){
            obj[sentence[i]] ++
        }else{
            obj[sentence[i]] = 1
        }
    }

    // Cari Char Yang Berjumlah 1 Saja
    var output = ''
    for(var props in obj){
        if(obj[props] == 1){
            output += props
        }
    }

    return output
}

console.log(findUniqChar('Saya Defryan'))



function spacify(str){
    var output = ''

    for(var i = 0; i < str.length; i++){
        if(str[i] != ' '){
            output += str[i] + ' '
        }else{
            output += str[i]
        }
    }

    return output
}

console.log(spacify('Budi pergi ke pasar'))



function findMiddle(word){
    if(word.length == 2){
        return ''
    }

    if(word.length % 2 != 0){
        var midd = Math.floor(word.length / 2)
        return word[midd]
    }else{
        var midd1 = (word.length / 2) - 1
        var midd2 = word.length / 2
        return word[midd1] + word[midd2]
    }
}

function concateMiddle(sentence){
    var output = ''
    sentence = sentence.split(' ')
    
    for(var i = 0; i < sentence.length; i++){
        var middle = findMiddle(sentence[i])
        output += middle
    }

    return output
}

console.log(concateMiddle('Purwadhika Digital School'))