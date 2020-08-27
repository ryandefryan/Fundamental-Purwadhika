// [Upper Case Waves]

// Hard Code :
// Defryan -> sentence.slice(0,0) + sentence[0].toUpperCase() + sentence.slice(1, sentence.length) + ' '
// dEfryan -> sentence.slice(0,1) + sentence[1].toUpperCase() + sentence.slice(2, sentence.length) + ' '
// deFryan -> sentence.slice(0,2) + sentence[2].toUpperCase() + sentence.slice(3, sentence.length) + ' '
// defRyan -> sentence.slice(0,3) + sentence[3].toUpperCase() + sentence.slice(4, sentence.length) + ' '
// defrYan -> sentence.slice(0,4) + sentence[4].toUpperCase() + sentence.slice(5, sentence.length) + ' '
// defryAn -> sentence.slice(0,5) + sentence[5].toUpperCase() + sentence.slice(6, sentence.length) + ' '
// defryaN -> sentence.slice(0,6) + sentence[6].toUpperCase() + sentence.slice(7, sentence.length) + ' '

function upperCase(sentence){

    var output = ''
    for(var i = 0; i < sentence.length; i++){
        output += sentence.slice(0,i) + sentence[i].toUpperCase() + sentence.slice(i+1, sentence.length) + ' '
    }
    return output
}

console.log(upperCase("defryan"))
console.log(upperCase("fikri"))