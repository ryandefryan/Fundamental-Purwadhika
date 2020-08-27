// [MUMBLING]
// Status : Done

function accum(s) {
    var output = ''

    for(var i = 0; i < s.length; i++){ 
        for (j = 0; j <= i; j++){
            if(j == 0){
                output = output + s[i].toUpperCase()
            }else if(j > 0){
                output = output + s[i].toLowerCase()
            }
        }
        if(i == ((s.length)-1)){

        }else{
            output += '-'
        }
    }

    return output
}

console.log(accum("AbcDe")) // Output : A-Bb-Ccc-Dddd-Eeeee
console.log(accum("DefRyan")) // Output : D-Ee-Fff-Rrrr-Yyyyy-Aaaaaa-Nnnnnnn