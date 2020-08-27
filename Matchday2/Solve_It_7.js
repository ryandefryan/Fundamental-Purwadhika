// Hitung jumlah karakter dari seluruh kata
// Replace "huruf a" menjadi kosong (Hlo Duni)
// Hitung jumlah karakter setelah "huruf a" dihilangkan
// Jumlah karakter keseluruhan DIKURANGI jumlah karakter setelah "huruf a" dihilangkan

var karakter = "Halo Dunia!"
var panjangkarakter1 = karakter.length

karakter = karakter.replace(/a/g, "") // Me-replace "huruf a" menjadi kosong
var panjangkaraktert2 = karakter.length

console.log('Jumlah Huruf "A" Sebanyak ' + (panjangkarakter1 - panjangkaraktert2))