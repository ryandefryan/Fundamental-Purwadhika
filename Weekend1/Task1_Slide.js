var z = ''
var i, z

for (i=0; i<5; i++){ // Looping 1
	for (j=0; j<i ;j++){ // Looping 2
            z = z + ' * '
        }
        z += '\n'
}

console.log(z)

// NOTE :
// Setiap Looping Dijalankan Terus Menerus dan Akan Berhenti Ketika Bernilai False

// STEP 1 :
// Looping 1
// i=0
// i=0 -> 0<5 -> True  -> Lanjut Looping 2
//Looping 2
// j=0
// j=0 -> 0<0 -> False -> ' ' -> Lanjut z += '\n'

// STEP 2 :
// Looping 1
// i=1
// i=1 -> 1<5 -> True  -> Lanjut Looping 2
// Looping 2
// j=0
// j=0 -> 0<1 -> True  -> ' * ' // Karena True, Maka Looping 2 Dijalankan Lagi
// j=1 -> 1<1 -> False -> ' * ' // Karena False, Maka Lanjut z += '\n'

// STEP 3 :
// Looping 1
// i=2
// i=2 -> 2<5 -> True  -> Lanjut Looping 2
// Looping 2
// j=1
// j=1 -> 1<2 -> True  -> ' * * ' // Karena True, Maka Looping 2 Dijalankan Lagi
// j=2 -> 2<2 -> False -> ' * *  ' // Karena False, Maka Lanjut z += '\n'

// STEP 4 :
// Looping 1
// i=3
// i=3 -> 3<5 -> True  -> Lanjut Looping 2
// Looping 2
// j=2
// j=2 -> 2<3 -> True  -> ' * * * ' // Karena True, Maka Looping 2 Dijalankan Lagi
// j=3 -> 3<3 -> False -> ' * * * ' // Karena False, Maka Lanjut z += '\n'

// STEP 5 :
// Looping 1
// i=4
// i=4 -> 4<5 -> True  -> Lanjut Looping 2
// Looping 2
// j=3
// j=3 -> 3<4 -> True  -> ' * * * * ' // Karena True, Maka Looping 2 Dijalankan Lagi
// j=4 -> 4<4 -> False -> ' * * * * ' // Karena False, Maka Lanjut z += '\n'

// STEP 6 :
// Looping 1
// i=5
// i=5 -> 5<5 -> False  -> Stop!

// FINAL RESULT :
// '  '
// ' * '
// ' * * '
// ' * * * '
// ' * * * * '