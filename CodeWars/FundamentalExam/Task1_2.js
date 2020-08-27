// [TASK 2]
// Mencetak Huruf yang Tidak Duplicate Dalam Sebuah Kalimat
// Status : Done

function findUniqChar(str){
    var countChar = 0
    var output = ''

    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < str.length; j++){
            if(str[i] == str[j]){
                countChar += 1
            }
        }
        if(countChar == 1){ // Apabila Jumlah Huruf Berjumlah 1, Maka Huruf Tersebut Tidak Duplicate (Dicetak Ke Output)
            output += str[i]
            countChar = 0
        }else{
            countChar = 0
        }
    }

    return output.replace(/ /g, '')
}

console.log(findUniqChar('hello world!'))