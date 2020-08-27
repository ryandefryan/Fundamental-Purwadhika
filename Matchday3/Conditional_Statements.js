// ***************
// Conditional Statement (Pengkondisian)



// ***************
// Assignment Operator : Memasukan suatu data ke variabel (wadah)

var nama;
nama = 'Defryan'
nama += 'Tridya' // Nama = Nama + Tridya (Defryan Tridya)

var angka;
angka = 10
angka += 20 // Angka = Angka + 20 (10 + 20 = 30)
angka *= 2 // Angka = Angka * 2 (30 * 2 = 60)

console.log(angka)



// ***************
// Comparison Operator : Operator ini akan menghasilkan Boolean

var angka1 = 10
var angka2 = '10'

// console.log(angka1 == angka2)
// console.log(angka1 > angka2)
// console.log(angka1 >= angka2)
// console.log(angka1 === angka2)



// ***************
// Logical Operator : Digunakan untuk mengcompare lebih dari 2 kondisi
// Jenis-jenis Logical Operator : && (And), || (Or), ! (Not)
// Rules :
//          1. && -> Salah satu kondisi False, maka hasil akhir akan False//
//             && -> Dua kondisi harus True, jika hasil akhir ingin True
//          2. || -> Salah satu kondisi True, maka hasil akhir akan True
//             || -> Dua kondisi harus False, jika hasil akhir ingin False
//          3. !  -> Kebalikan dari hasil (invers)

var beratbadan = 80

// console.log(beratbadan != 0)
// console.log(beratbadan === 0)
// console.log(beratbadan === 0 || beratbadan == 90)
// console.log(beratbadan === 0 || beratbadan > 0)
// console.log(beratbadan === 0 && beratbadan > 0)
// console.log(beratbadan > 10 && beratbadan > 0)



// ***************
// Conditional Statement
// Rules :
//          1. Condition True -> Action Jalan
//          2. Jika semua kondisi False -> Menjalankan Action Default
// Syntax : 
//          if(condition1) { action1 }
//          else if (condition2) { action2 }
//          else { actiondefault }

var nilai = 90

if(nilai < 70) {
    console.log('Kamu Harus Remedial!!!')
} else if(nilai >= 70 && nilai < 90) {
    console.log('Kamu Lulus dengan Nilai Baik')
} else {
    console.log('Kamu Lulus dengan Nilai Sempurna')
}

// Semua kondisi bakalan dicek satu per-satu

var nilai = 40 

if(nilai < 70){
    console.log('Kamu Harus Remedial!!!')
}
if(nilai <= 70 && nilai < 90){
    console.log('Kamu Lulus dengan Nilai Baik')
}
if(nilai == 50){
    console.log('Kamu Juga Masih Remedial!!!')
}



// Nested Condition : If di dala if

var angka = 9

if(angka > 0){
    if(angka > 10){
        console.log('Angka Besar')
    }else{
        console.log('Angka Kecil')
    }
}else{
    console.log('Angka Minus')
}