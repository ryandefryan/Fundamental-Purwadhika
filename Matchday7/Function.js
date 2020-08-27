// ***************
// FUNCTION -> Block Of Code Can Be Named, Reused, and Maintainable
// Tahap Function :
//                  1. Build (membuat functionnya)
//                  2. Call (meng-call function yg telah dibuat)
// Syntax :
//          function 'nama_function'(){
//              block_code
//          }

// TAHAP BUILD
function Hello(){
    console.log('Hello Fams!')
}

// TAHAP CALL
Hello()
Hello()
Hello()



// ***************
// TYPE OF FUNCTION

// Function Declaration
function Hello(){
    console.log('Hello Fams!')
}

// Function Expression
var Hello = function(){
    console.log('Hello Defryan!')
}



// ***************
// FUNCTION WITH PARAMETER
// Function lebih fleksibel dan dapat menerima data

function sapa(a){
    console.log('Hello ' + a)
}

sapa('Defryan')
sapa('Syahda')

// Function lebih dari 1 parameter

function penjumlahan(angka1, angka2){
    console.log(angka1 + angka2)
}

penjumlahan(20, 12)
penjumlahan(19, 95)



function operator(angka1, angka2, op){ // Declare variabel tetapi tidak ada valuenya
    if(op == '+'){
        console.log(angka1 + angka2)
    }else if(op == '-'){
        console.log(angka1 - angka2)
    }else if(op == 'x'){
        console.log(angka1 * angka2)
    }else if(op == ':'){
        console.log(angka1 / angka2)
    }
}

operator(10, 20, 'x') // Proses assign variabel yg di function



// ***************
// RETURN FUNCTION
// Function dapat melakukan return maupun tidak (sesuai kebutuhan)
// Function terdapat 2 tipe :
//                              1. Function mengerjakan sesuatu
//                              2. Function menghasilkan sesuatu

function Hello2(){
    return 'Hello Fams!!!'
}

function Hello3(){
    console.log('Hello Fams!!!')
}

var hasilHello2 = Hello2() + ' Defryan'
var hasilHello3 = Hello3() + ' Defryan'

console.log(hasilHello2)
console.log(hasilHello3)



// ***************
// FUNCTION INSIDE FUNCTION

function a(x){
    console.log('Hello ' + x)
}

function b(y){
    a(x)
    console.log(y)
}

b('Fikri')