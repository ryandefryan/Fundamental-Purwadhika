// [GET MIDDLE CHARACTER]
// Mengambil Karakter Paling Tengah 
// Status : Done

function getMiddle(s){
    var lengthS = s.length
    var middleS = Math.floor(Number(lengthS) / 2)
    var output = ''

    if(lengthS % 2 == 0){
        for (var i = 0; i < lengthS; i++){
            if(i == middleS){
                output += s[(middleS - 1)]
                output += s[middleS]
            }
        }
    }else{
        for (var i = 0; i < lengthS; i++){
            if(i == middleS){
                output = s[(0 + middleS)]
            }
        }
    }

    return output
}

console.log(getMiddle("Testing")) // Output: t
console.log(getMiddle("Middle")) // Output: dd
console.log(getMiddle("Test")) // Output: es