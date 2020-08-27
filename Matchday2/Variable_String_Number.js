// ********************
// Variable : Wadah buat menyimpan wadah (memiliki nama)
// Hanya bisa menyimpan 1 data
// Terdapat proses declaration & assignment, yaitu proses membuat wadah dan memproses isi wadah (data itu sendiri)

var nama_mobil // Dinamakan declaration (wadahnya)
nama_mobil = 'Avanza' // Dinamakan assignment (isi wadah)

var nama_hewan // Declaration & assignment dibuat sendiri-sendiri
nama_hewan = 'Kucing'

var nama_orang = 'Defryan' // Declaration & assignment sekaligus jadi satu
var nama_orang = 'Tridya' // Console log akan membaca var yang terakhir saja (Defryan tidak terbaca)
// nama_orang = 'Isfandy' // Jika ini aktif, maka Isfandy akan me-replace Tridya

// console.log(nama_orang)
// console.log(nama_mobil)
// console.log(nama_hewan)



// ********************
// Comment : Sebuah note untuk komunikasi antar programmer
// Diabaikan oleh mesin



// ********************
// Prompt & Alert : Untuk menampilkan data selain pakai console.log
// Hanya jalan di interpreter browser
// File extensionnya menggunakan .html



// ********************
// Data Types (String, Number, Boolean, Undefined)
// Tiap tipe data memiliki behaviournya masing-masing
// Tiap tipe data juga memiliki methodnya masing-masing (method = senjata)

// 1. String : Menggunakan petik 2 ("")
var data_string = "Defryan"
data_string = "Defryan20"
data_string = "20121995"
var tipe = typeof(data_string) // Untuk mengecek tipe data yang digunakan

// console.log(data_string)
// console.log(tipe)

// 2. Number
var data_number = 20121995
var tipe = typeof(data_number) // Untuk mengecek tipe data yang digunakan

// console.log(data_number)
// console.log(tipe)

// 3. Boolean : True/False
var data_boolean = true
var tipe = typeof(data_boolean)

// console.log(data_boolean)
// console.log(tipe)

// 4. Undefined
var data_undefined;
// console.log(data_undefined)

// L A N 1. String
// Jika menggunakan operasi aritmatik penjumlahan, maka digabungkan bukan ditambah
// Operasi aritmatik yang dapat digunakan hanya penjumlahan (+)
var nama_depan = 'Defryan '
var alamat = 'Komplek Puri Asri C5'

var nomor_1 = '20'
var nomor_2 = '12'

// console.log(nama_depan + alamat)
// console.log(nomor_1 + nomor_2)
// console.log(nama_depan - alamat) // Jika dijalankan hasilnya akan NaN (Not a Number).

// Methods
var data_judul_film = 'Fast & Furious 7'
// console.log(data_judul_film.length)
// console.log(data_judul_film.slice(0,16))

// L A N 2. Number
// Bisa menggunakan semua operasi aritmatik (+, -, /, *, dan Modulus %)

var angka_1 = 100
var angka_2 = 200

// console.log(angka_1 + angka_2)
// console.log(angka_1 - angka_2)
// console.log(angka_1 / angka_2)
// console.log(angka_1 * angka_2)

var angka_1 = 10
var angka_2 = 3

// console.log(angka_1 % angka_2)

// Methods
// Convert Number to String
// [PROBLEM!] Membuat program untuk mengambil 3 nomor pertama
// [STEPS!] Ubah dulu menjadi String, lalu ambil 3 String pertama menggunakan slice

// [PROBLEM!] 
var data_nomor = 20121995

// [STEP1!]
var data_nomor_string = data_nomor.toString()
// console.log(data_nomor_string)
// [STEP2!]
var tiga_nomor_pertama = data_nomor_string.slice(0,3)
// console.log(tiga_nomor_pertama)



// ********************
// Math Objects : Digunakan untuk memanipulasi Number (senjata tambahan)

var angka = 4.4
var angka = Math.round(angka)

// console.log(angka)



// ********************
// Date Object : Tanggal

var date = new Date()

// console.log(date)
// console.log(date.getFullYear())
// console.log(date.getMonth())
