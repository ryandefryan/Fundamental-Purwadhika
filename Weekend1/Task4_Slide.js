var baris, i
var tinggi = 10
var z = ''
 
for (baris=0; baris<=tinggi; baris++){
 
	// Membuat Sejumlah Spasi
	for(i=1; i<=tinggi-baris; i++){
		z += ' ' // Karakter spasi
	}
	// Menampilkan Bintang
	for (i=1; i<2*baris; i++){
		z += '*' 
	}
	// Pindah Baris
	z += '\n' }

	console.log(z)

// STEP 1
// Looping 1
// baris=0 -> baris<=10? TRUE -> Lanjut Ke Looping 2
	
// Looping 2
// i=1 -> i<=10-0? TRUE -> Cetak Spasi ' '
// i=2 -> i<=10-0? TRUE -> Cetak Spasi '  '
// ...
// i=10 -> i<=10-0? TRUE -> Cetak Spasi '           '
// i=11 -> i<=10-0? FALSE -> Lanjut Ke Looping 3

// Looping 3
// i=1 -> i<2*0? FALSE -> Stop!!!

// ***************

// STEP 2
// Looping 1
// baris=1 -> baris<=10? TRUE -> Lanjut Ke Looping 2
	
// Looping 2
// i=1 -> i<=10-1? TRUE -> Cetak Spasi ' '
// i=2 -> i<=10-1? TRUE -> Cetak Spasi '  '
// ...
// i=9 -> i<=10-1? TRUE -> Cetak Spasi '          '
// i=10 -> i<=10-1? FALSE -> Lanjut Ke Looping 3

// Looping 3
// i=1 -> i<2*1? TRUE -> Cetak Bintang '*'
// i=2 -> 2<2*1? FALSE -> Stop!!!
// HASIL AKHIR : '          *'

// ***************

// STEP 3
// Looping 1
// baris=2 -> baris<=10? TRUE -> Lanjut Ke Looping 2
	
// Looping 2
// i=1 -> i<=10-2? TRUE -> Cetak Spasi ' '
// i=2 -> i<=10-2? TRUE -> Cetak Spasi '  '
// ...
// i=8 -> i<=10-1? TRUE -> Cetak Spasi '         '
// i=9 -> i<=10-1? FALSE -> Lanjut Ke Looping 3

// Looping 3
// i=1 -> i<2*2? TRUE -> Cetak Bintang '*'
// i=2 -> 2<2*2? TRUE -> Cetak Bintang '**'
// i=3 -> 3<2*2? TRUE -> Cetak Bintang '***'
// i=4 -> 4<2*2? FALSE -> Stop!!!
// HASIL AKHIR : '          ***'
