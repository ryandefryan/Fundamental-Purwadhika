function sumMix(x){
    var result = 0

    for(var i = 0; i < x.length; i++){
        result += Number(x[i])
    }

    return result
}

console.log(sumMix([9, 3, '7', '3']))