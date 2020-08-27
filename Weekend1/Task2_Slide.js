var z = ''
var i, j

for(i=5; i>=1; i--){
    for(j=0; j<i; j++){
        z += ' * '
    }
    z += '\n'
}

console.log(z)

// NOTE :
// Setiap Looping Dijalankan Terus Menerus dan Akan Berhenti Ketika Bernilai False

// STEP 1 :
// Looping 1
// i=5
// i=5 -> 5>=1 -> True  -> Lanjut Looping 2
//Looping 2
// j=0
// j=0 -> 0<5 -> True -> ' * ' -> Karena True, Maka Looping 2 Dijalankan Lagi
// j=1
// j=1 -> 1<5 -> True -> ' * * ' -> Karena True, Maka Looping 2 Dijalankan Lagi
// .
// .
// .
// j=5
// j=5 -> 5<5 -> False -> ' * * * * * ' -> Lanjut z += '\n'
// HASIL STEP 1 : ' * * * * * '

// STEP 2 :
// Looping 1
// i=4
// i=4 -> 4>=1 -> True  -> Lanjut Looping 2
//Looping 2
// j=0
// j=0 -> 0<5 -> True -> ' * ' -> Karena True, Maka Looping 2 Dijalankan Lagi
// j=1
// j=1 -> 1<5 -> True -> ' * * ' -> Karena True, Maka Looping 2 Dijalankan Lagi
// .
// .
// .
// j=4
// j=4 -> 4<4 -> False -> ' * * * * ' -> Lanjut z += '\n'
// HASIL STEP 2 : ' * * * * '

// STEP 3 :
// Looping 1
// i=3
// i=3 -> 3>=1 -> True  -> Lanjut Looping 2
//Looping 2
// j=0
// j=0 -> 0<5 -> True -> ' * ' -> Karena True, Maka Looping 2 Dijalankan Lagi
// j=1
// j=1 -> 1<5 -> True -> ' * * ' -> Karena True, Maka Looping 2 Dijalankan Lagi
// .
// .
// .
// j=4
// j=4 -> 4<4 -> False -> ' * * * ' -> Lanjut z += '\n'
// HASIL STEP 3 : ' * * * '

// STEP 4 :
// Looping 1
// i=2
// i=2 -> 2>=1 -> True  -> Lanjut Looping 2
//Looping 2
// j=0
// j=0 -> 0<5 -> True -> ' * ' -> Karena True, Maka Looping 2 Dijalankan Lagi
// j=1
// j=1 -> 1<5 -> True -> ' * * ' -> Karena True, Maka Looping 2 Dijalankan Lagi
// .
// .
// .
// j=2
// j=2 -> 2<2 -> False -> ' * * ' -> Lanjut z += '\n'
// HASIL STEP 4 : ' * * '

// STEP 5 :
// Looping 1
// i=1
// i=1 -> 1>=1 -> True  -> Lanjut Looping 2
//Looping 2
// j=0
// j=0 -> 0<5 -> True -> ' * ' -> Karena True, Maka Looping 2 Dijalankan Lagi
// j=1
// j=1 -> 1<1 -> False -> ' * ' -> Lanjut z += '\n'
// HASIL STEP 5 : ' * '

// FINAL RESULT :
// ' * * * * * '
// ' * * * * '
// ' * * * '
// ' * * '
// ' * '