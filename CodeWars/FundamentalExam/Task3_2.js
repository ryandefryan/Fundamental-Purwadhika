// [COUNT VOWELS]

function countVowels(sentence){
    var vowels = 'aiueo'
    var countVowels = 0

    for(var i = 0; i < sentence.length; i++){
        for(var j = 0; j < vowels.length; j++){
            if(sentence[i].toLowerCase() == vowels[j]){
                countVowels++
            }
        }
    }

    return countVowels
}

console.log(countVowels('Budi pergi ke pasar'))
console.log(countVowels('Purwadhika'))