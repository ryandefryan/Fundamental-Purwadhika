// ***************
// LOOPING
// Condition -> Selama kondisi true, maka Action akan berjalan terus
// Action -> Dijalankan ketika kondisi true
// Infinite Loop -> Ketika kondisi selamanya true
// Exit Way -> Sebuah syntax agar tidak Infinite Loop



// ***************
// 1. WHILE
// Syntax :
//          white(condition){
//              action
//          }

// Infinite Loop
// var angka1 = 1
// while(angka1 < 10){
//     console.log(angka1)
// }

// Exit Way
// var angka2 = 2
// while(angka2 < 10){
//     console.log(angka2)
//     angka2 ++    // Exit Way
// }

// var angka3 = 3
// while(angka3 < 10){
//     console.log(angka3)
//     angka3 = 100
// }

// var nama = 'Defryan'
// while(nama.length < 10){
//     console.log(nama)
//     nama += 'n'
// }



// ***************
// 2. DO WHILE
// Perbedannya dengan While, apabila While dicek dahulu baru action
// Sedangkan Do While, jalan dulu baru action
// Syntax :
//          do{
//              action
//          } while(condition)

// var angka = 8
// do{
//     console.log('Do While')
// }while(angka < 10)



// ***************
// 2. FOR

for(var nama = 'Defryannn'; nama.length < 10; nama += 'n'){
    console.log(nama)
}
