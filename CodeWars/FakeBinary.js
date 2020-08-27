// [FAKE BINARY]
// Status : Done
// Ketentuan :
//              1. Mengubah Bilangan Menjadi Binary
//              2. Ketentuan : 
//                              - Apabila Bilangan 0 - 5 Diubah Menjadi ---> 0
//                              - Apabila Bilangan > 5 Diubah Menjadi ---> 1

function fakeBin(binNumber){
    var binOutput = ''

    for(i = 0; i < binNumber.length; i++){
        if((binNumber[i] < 5) && (binNumber[i] >= 0)){
            binOutput += '0'
        }else{
            binOutput += '1'
        }
    }

    return binOutput
}

console.log(fakeBin('45385593107843568')) // 01011110001100111