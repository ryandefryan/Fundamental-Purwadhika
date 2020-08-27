// [EXES AND OHS]
// Mencari "o" dan "x" Memiliki Jumlah yang Sama
// Status : Done

function XO(str) {
    var secondStr = ['x', 'o']
    var countX = 0
    var countO = 0

    for(var i = 0; i < str.length; i++){
        if(secondStr[0] == str[i].toLowerCase()){
            countX += 1
        }else if(secondStr[1] == str[i].toLowerCase()){
            countO += 1
        }
    }

    if(countX == countO){
        return true
    }else{
        return false
    }
}

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xxxm'))
console.log(XO('oO'))
console.log(XO('zpzpzp'))