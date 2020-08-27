// ***************
// LET & CONST -> Create Variable

// 1. LET -> Hanya 1x Declare, dan Tidak Boleh Membuat Let dengan Nama yang Sama

let nama = 'Defry'
nama = 'Tridy'

// 2. CONST -> Tidak Bisa di Re-assign

const kelas = 'JCWM-03'



// ***************
// ARROW FUNCTION

// Function Biasa :
function Nama(a){
    console.log('Hello, My Name is ' + a)
}

// ARROW FUNCTION :
const NamaKu = (a) => {
    console. log('Hello, My Name is ' + a)
}



// ***************
// TEMPLATE STRING / TEMPLATE LITERAL -> Tata Cara Penulisan String Terbaru

// Penulisan Lama :
var nama = 'Defry'
var alamat = 'Sidoarjo'
console.log('Nama Saya Adalah ' + nama + ', Saya Tinggal di ' + alamat)

// PENULISAN BARU :
console.log(`Nama Saya Adalah ${nama}, Saya Tinggal di ${alamat}`)



// ***************
// DEFAULT PARAMETER

const dataKu = (nama='anonim',gaji=0) => { // Parameter Nama -> String, Parameter Gaji -> Number
    console.log(`Nama saya ${nama}, gaji saya Rp. ${gaji}`)
} 
dataKu()



// ***************
// DESTRUCTING OBJECTS -> Mengeluarkan Props dari Array

// Penulisan Lama :
var data2 = {
    nama : {
        depan : "fikri",
        belakang : "susilo"
    }
}
console.log(`nama saya ${data2.nama.depan} ${data2.nama.belakang}`)

// PENULISAN BARU :
var data = {
    nama : 'Defryan',
    alamat : 'Sidoarjo'
}

var{nama, alamat} = data
console.log(`Nama Saya ${nama}, Asal dari ${alamat}`)



// ***************
// SPREAD OPERATOR

let a = [1,2,3,4]
let b = [5,6,7,8]

console.log(a)

console.log(...a)

let c = [...a,...b]
console.log(c)



// ***************
// ARRAY METHODS (MAP, FOREACH, FILTER)

// 1. FOREACH -> For Biasa yang Penulisannya Lebih Singkat
var arr = [2,0,1,2,1,9,9,5]

arr.forEach((a,b) => { // a: Valuenya, b: Indexnya
    total += b
})

arr.forEach(({},b) => { // Valuenya Kosong, b: Indexnya
    total += b
})

// 2. MAP -> For yang Menghasilkan Array Baru yang Telah Dimanipulasi
var newArr = arr.map((val,index) => {
    return  val * index
})

// 3. FILTER -> For yang Menghasilkan Array Baru yang Telah Difilter
var newArr = arr.filter((val,index) => {
    return val > 3
})
console.log(newArr)