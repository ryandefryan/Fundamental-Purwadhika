function parkingCalculator(jamMasuk, jamKeluar){
    var tarif = 1000
    if(jamMasuk > jamKeluar){
        return 'Jam Masuk Harus Kurang Dari Jam Keluar'
    }else{
        return 'Anda Parkir Selama ' + (jamKeluar - jamMasuk) + ' Dengan Biaya Rp.' + ((jamKeluar - jamMasuk) * tarif)
    }
}

console.log(parkingCalculator(5,8))