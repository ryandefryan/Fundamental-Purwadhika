// [TASK 4]
// Memberikan Spasi Pada Setiap Huruf
// Status : Done

function spacify(str){
    var output = str.split('').join(' ')

    return output
}

function anotherSpacify(str){
    var output = ''

    for(var i = 0; i < str.length; i++){
        if(i == str.length-1){
            output += str[i]
        }else{
            output += str[i] + ' '
        }
    }

    return output
}

console.log(spacify('hello'))
console.log(anotherSpacify('hello'))