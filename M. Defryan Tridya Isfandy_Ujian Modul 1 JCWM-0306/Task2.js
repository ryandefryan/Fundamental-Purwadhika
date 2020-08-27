function alphabetsWar(alpha1, alpha2){
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    var totalAlpha1 = 0
    var totalAlpha2 = 0

    // Menghitung Total Alphabet Masing-Masing
    for(var i = 0; i < alpha.length; i++){
        for(var j = 0; j < alpha1.length; j++){
            if(alpha[i] == alpha1[j]){
                totalAlpha1 += i+1
            }
        }
        for(var k = 0; k < alpha2.length; k++){
            if(alpha[i] == alpha2[k]){
                totalAlpha2 += i+1
            }
        }
    }

    // Menentukan Total Alpha Terbanyak
    if(totalAlpha1 > totalAlpha2){
        return '"' + alpha1 + '" Win The War'
    }else if(totalAlpha2 > totalAlpha1){
        return '"' + alpha2 + '" Win The War'
    }else{
        return 'Nobody Win The War'
    }
}

console.log(alphabetsWar('abc','aaa'))
console.log(alphabetsWar('aaa','def'))
console.log(alphabetsWar('abc','abc'))