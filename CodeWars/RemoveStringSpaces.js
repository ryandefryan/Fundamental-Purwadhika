// [REMOVE STRING SPACES]
// Menghilangkan Spasi Pada Sebuah Kalimat
// Status : Done

function noSpace(x){
    x = x.replace(/ /g, '')

    return x
}

console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')) // Output ---> 88Bifk8hB8BB8BBBB888chl8BhBfd