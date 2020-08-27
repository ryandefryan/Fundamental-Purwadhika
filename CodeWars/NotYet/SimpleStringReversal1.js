// [SIMPLE STRING REVERSAL]
// Me-reverse String dengan Beberapa Syarat
// Status : -

const solve = (str) => {
    let countSpace = 0
    let output = ''

    for(var i = 0; i < str.length; i++){
        if(str[i] == ' '){
            countSpace++
        }
    }

    for(var i = str.length-1; 0 <= i; i--){
        if(countSpace > 1){
            if(str[i-1] == ' '){
                output += ' ' + str[i]
            }else if(str[i] == ' '){
                output += ''
            }else{
                output += str[i]
            }
        }else{
            output += str[i]
        }
    }
    
    return output
}

console.log(solve('Codewars'))
console.log(solve('Our code'))
console.log(solve('Your code rocks'))