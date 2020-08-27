// [SELECTING CHARS] / [WHERE MY ANAGRAMS]
// Status : Done

function anagrams(word, words){
    var sortWord = word.split('').sort().join('')
    var sortWords = []
    var result = []

    for(var i = 0; i < words.length; i++){
        sortWords.push(words[i].split('').sort().join(''))

        if(sortWord == sortWords[i]){
            result.push(words[i])
        }
    }

    return result
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // Result: ['aabb', 'bbaa']
console.log(anagrams('carer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // Result: ['carer', 'racer']