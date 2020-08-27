// ***************
// OBJECT -> Sama Seperti Array dan Variabel, Memiliki Fungsi Untuk Menyimpan Data
// Fungsi Object :
//                  1. Menerima data dari database (karena data dalam database dikirim dalam bentuk Object)

// ***************
// 1. CREATE

// CREATE : Object Literal
var siswa = {
    nama : "Defryan",
    umur : 26,
    jenisKelamin : 'Laki-Laki'
}

// Nama, Umur, Kelamin ---> Property
// Defryan, 26, Laki-Laki ---> Value

// CREATE : Object New
var mahasiswa = new Object()
mahasiswa.nama = 'Syahda'
mahasiswa.umur = 26
mahasiswa.jenisKelamin = 'Perempuan'

// CREATE : Object Class ---> Sebuah Cetakan Untuk Membuat Object
// Fungsi :
//          1. Untuk membuat banyak Object dengan Property yg sama
//          2. Untuk menghindari typo (salah pengetikan)
class Siswa{
    constructor(a,b,c){
        this.nama = a;
        this.umur = b;
        this.jenisKelamin = c;
    }
}

var siswa1 = new Siswa('Defryan',26,'Laki-Laki')
var siswa2 = new Siswa('Syahda',26,'Perempuan')
var siswa3 = new Siswa ('Bagoes',28,'Laki-Laki')

// Array of Object
var siswaSiswa = [
    {nama : 'Defryan', umur : 26, jenisKelamin : 'Laki-Laki'},
    {nama : 'Tridya', umur : 20, jenisKelamin : 'Laki-Laki'},
    {nama : 'Syahda', umur : 26, jenisKelamin : 'Perempuan'}
]

console.log(siswa)
console.log(mahasiswa)



// ***************
// 2. METHOD ---> Property yang Isinya Function

class BlogPost{
    constructor(title, body, author){
        this.title = title
        this.bodyPost = body
        this.writer = author

        this.printBlogTitle = function(){
            console.log(this.title + ', Author by: ' + this.writer)
        }

        this.newTitle = function(newTitle){
            this.title = newTitle
        }
    }
}

var post1 = new BlogPost('Fundamental Javascript','This is body','Fikri')
post1.printBlogTitle()

post1.newTitle('Javascript Advance')
post1.printBlogTitle()



var post2 = new BlogPost('Tutorial Memasak Mie Tek-Tek','This is body','Defryan')
post2.printBlogTitle()

post2.newTitle('Tutorial Memasak Bolu')
post2.printBlogTitle()



// ***************
// 3. READ

var siswa1 = new Siswa('Rendy','23','Laki-Laki')
console.log(siswa1)
console.log(siswa1.nama)
console.log(siswa1.umur)
console.log(siswa1.jenisKelamin)

console.log('Nama saya ' + siswa1.nama + ', umur ' + siswa1.umur + ' tahun. Saya seorang ' + siswa1.jenisKelamin)

// ***************
// 4. UPDATE

var post1 = new BlogPost('Fundamental Javascript','This is body','Fikri')
post1.writer = 'Seto'
post1.printBlogTitle()

post1.publishDate = '20-05-2020'
console.log(post1)



// ***************
// 5. DELETE

delete post1.publishDate // Menghapus publish date
post1.writer = null
console.log(post1)



// ***************
// TAMBAHAN CARA AKSES DATA YANG RUMIT

var a = [
    [
        'Defryan',
        {
            a : 'Bagoes', b : [{a : 'Dimas'}]
        }
    ]
]

console.log(a[0][0]) 
console.log(a[0][1].b[0].a)



var x = {
    y : [{nama : 'Defryan'}],
    z : [{nama : ['Bagoes','Dimas']}]
}

console.log(x.y[0].nama)
console.log(x.z[0].nama[1])



var d = [
    {
        nama : {
            depan : 'Defryan',
            belakang : 'Tridya'
        },
        pekerjaan : ['Back-End Developer']
    }
]

console.log(d[0].pekerjaan[0])