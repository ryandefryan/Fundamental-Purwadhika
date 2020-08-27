var hari = 361

var tahun = Math.floor(hari / 360)
var sisa_bagi_tahun = hari % 360
var bulan = Math.floor(sisa_bagi_tahun / 30)
var sisa_bagi_bulan = sisa_bagi_tahun % 30
var print = hari + ' Hari = ' + tahun + ' Tahun, ' + bulan + ' Bulan, ' + sisa_bagi_bulan + ' Hari'

console.log(print)