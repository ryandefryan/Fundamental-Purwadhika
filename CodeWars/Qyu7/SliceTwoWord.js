// [SLICE TWO WORD] / [ABBREVIATE TWO WORD]
// Mengambil Huruf Paling Awal Pada 2 Buah Kalimat
// Status : Done

function abbrevName(name){

    var result = ''

    for(var i=0; i<name.length; i++){
        if(i == 0){
            result = name[i].toUpperCase() + '.'
        }else if(name[i] == ' '){
            result += name[i+1].toUpperCase()
        }
    }

    return result
}

console.log(abbrevName('Ryan Defryan'))