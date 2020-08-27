// [LOOPING ALPHABETS]

function loopingAlpha(alpha){
    var output = ''

    for(var i = 0 ; i < alpha.length ; i++){
        output+= alpha[i].toUpperCase()
        output += alpha[i].repeat(i).toLowerCase()
        output += '-'
    }
    output = output.slice(0,output.length-1)
    
    return output
}

console.log(loopingAlpha('abcd'))