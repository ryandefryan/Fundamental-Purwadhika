// [STRING REPEAT]
// Mencetak String Sejumlah "X Inputan"
// Status : Done

function repeatStr (n, s) {
    var output = ''

    for(var i = 0; i < n; i++){
        output += s
    }

    return output
}

console.log(repeatStr(3, "*"))
console.log(repeatStr(5, "#"))
console.log(repeatStr(2, "Hello!"))