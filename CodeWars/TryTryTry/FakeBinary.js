function fakeBin(x){
    var result = ''

    for(var i = 0; i < x.length; i++){
        if(x[i] >= 0 && x[i] < 5){
            result += 0
        }else{
            result += 1
        }
    }

    return result
}

console.log(fakeBin('45385593107843568'))