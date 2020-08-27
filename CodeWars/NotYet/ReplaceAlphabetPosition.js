// [REPLACE ALPHABET POSITION]
// Status = Done

function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    text = text.toLowerCase()
    var alphaNumber = []
    var output = ''

    for(var i = 0; i < text.length; i++){
        for(var j = 0; j < alphabet.length; j++){
            if(text[i] == alphabet[j]){
                alphaNumber.push(j+1)
            }
        }
    }
    output = alphaNumber.toString()
    output = output.replace(/,/g, ' ')
    return output
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")) // Output: 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11