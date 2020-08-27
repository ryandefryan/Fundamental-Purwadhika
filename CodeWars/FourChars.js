// [FOUR CHARS]
// Status : Done
// Ketentuan : Mencari Kalimat Dengan 4 Huruf Saja! Apabila Benar Maka TRUE dan Salah Maka FALSE 

function fourChar(world){
    if(world.length == 4){
        return 'Benar'
    }else{
        return 'Salah'
    }
}

console.log(fourChar('Defryan')) // Salah
console.log(fourChar('Ryan')) // Benar
console.log(fourChar('Imam')) // Benar
console.log(fourChar('Aji')) // Salah