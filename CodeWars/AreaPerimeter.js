// [AREA PERIMETER]
// Status : Done
// Hitung Luas Persegi Apabila 2 Parameter Memiliki Nilai Sama
// Hitung Keliling Persegi Panjang Apabila 2 Parameter Memiliki "NILAI BERBEDA"

function areaOrPerimeter(length, width){

    var result = 0
    if(length == width){
        result += width * length
    }else{
        result += 2 * (width + length)
    }

    return result
}

console.log(areaOrPerimeter(4, 4))
console.log(areaOrPerimeter(6, 10))