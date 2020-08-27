// ***************
// INHERITANCE ---> Pewarisan Property dan Method

var kucing = {
    golongan : 'Mamalia',
    lamaHidup : 10,
    makanan : 'Daging',
    warnaBulu : 'Oren'
}

var kuda = {
    golongan : 'Mamalia',
    lamaHidup : 20,
    makanan : 'Tumbuhan',
    jenis : 'Poni',
    kecepatan : 50
}

class Hewan{
    constructor(a,b,c){
        this.golongan = a
        this.lamaHidup = b
        this.makanan = c
    }
}

class Kucing extends Hewan {
    constructor(a,b,c,d,e){
        super(a,b,c)
        this.jenis = d
        this.kecepatan = e
    }
}

class Kuda extends Hewan {
    constructor(a,b,c,d){
        super(a,b,c)
        this.warnaBulu = d
    }
}



class Product {
    constructor(nama, harga){
        this.nama = nama
        this.harga = harga
    }
}

class Buah extends Product {
    constructor(nama, harga, stocks){
        super(nama, harga)
        this.stocks = stocks
    }
}

class Handphone extends Product {
    constructor(nama, harga, ram, memory, camera){
        super(nama, harga)
        this.ram = ram
        this.memory = memory
        this.camera = camera
    }
}

class HandphoneSecond extends Handphone {
    constructor(nama, harga, ram, memory, camera, tanggalBeli, service){
        super(nama, harga, ram, memory, camera)
        this.tanggalBeli = tanggalBeli
        this.service = service
    }
}