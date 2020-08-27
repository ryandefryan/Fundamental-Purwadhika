// [REMOVE FIRST & LAST CHAR]
// Status : Done
// Ketentuan : Menghapus Huruf Paling Awal dan Paling Akhir Pada Sebuah Kalimat

function removeChar(world){

    var removeOutput = ''
    removeOutput += world.slice(1, (world.length)-1)

    return removeOutput
}

console.log(removeChar('Country'))
console.log(removeChar('Person'))