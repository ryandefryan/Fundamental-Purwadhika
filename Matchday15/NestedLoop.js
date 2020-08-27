// * * * * *
// * * * * *
// * * * * *

var output1 = ''

for(var i = 0; i < 5; i++){
    for(var j = 0; j < 5; j++){
        output1 += '* '
    }

    output1 += '\n'
}

console.log(output1)



// *
// * *
// * * * 

var output2 = ''

for(var i = 0; i < 3; i++){
    for(var j = 0; j < i+1; j++){
        output2 += '* '
    }

    output2 += '\n'
}

console.log(output2)



// * * * * * 
// * * * *
// * * *
// * *
// * 

var output3 = ''
for(var i = 0 ; i < 5 ; i ++){
    for(var j = 0 ; j < 5-i ; j++){
        output3 +='* '
    }
    output3 += '\n'
}


console.log(output3)



//   *      Baris 1, Jumlah Spasi: 3
//  ***     Baris 2, Jumlah Spasi: 2
// *****    Baris 3, Jumlah Spasi: 1

var output4 = ''
var bintang = 1

for(var i = 0; i < 5; i++){
    for (var j = 0; j < 5-i; j++){
        output4 += ' '
    }

    for(var k = 0; k < bintang; k++){
        output4 += '*'
    }

    bintang += 2
    output4 += '\n'
}

console.log(output4)



// 1 2 3
// 2 4 6
// 3 6 9

function multiplicationTable(row, col){
    var output5 = ''

    for(var i = 0; i < row; i++){
        var angka = i+1

        for(var j = 0; j < col; j++){
            output5 += angka + ' '
            angka += i+1
        }

        output5 += '\n'
    }

    console.log(output5)
}

multiplicationTable(3,3)