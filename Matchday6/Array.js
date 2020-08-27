// ARRAY

// ***************
// Create Array 

let mobil = ['Avanza', 'Rush', 'Sigra']
console.log(mobil[0]) // Avanza
console.log(mobil[1]) // Rush
console.log(mobil[2]) // Sigra

// Menampilkan Data Array Menggunakan Looping

for(var i = 0; i < mobil.length; i++){
    console.log(mobil[i]) // Avanza, Rush, Sigra
}

// ***************
// Read Array 

var namaProduct = ['Pepsodent','Sensodyne','Ciptadent']
var harga = ['12500','29000','9000']
var stock = ['10','5','20']

for(var i = 0; i < namaProduct.length; i++){
    console.log(namaProduct[i] + ' Rp.' + harga[i] + ' (Jumlah Stock : ' + stock[i] + ')')
}

// var product, harga, stock

// product = ['Apel','Leci','Anggur','Jeruk','Mangga']
// harga = ['20000','30000','35000','12500','15000']
// stock = ['10','10','15','20','5']

// for(var i = 0; i < product.length; i++){
//     console.log(product[i] + ' Memiliki Stock ' + stock[i] + ' Kg, Dengan Harga Rp.' + harga[i] + '/Kg')
// }

// ***************
// Nested Array 

var a = 'Defry'

var arr = [a, 'Tridy', a+ 'Isfand', 90, true]

var newArr = [['Defry', ['Sidoarjo','Jawa Timur',arr]],['Syah',['Pacitan','Jawa Timur']]]

console.log(newArr[0][0])
console.log(newArr[0][1][0])
console.log(newArr[0][1][2][2])
console.log(newArr[0][1][2][3])