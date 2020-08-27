function mxdiflg(a1, a2) {
    var max = 0

    for(var i = 0; i < a1.length; i++){
        for(var j = 0; j < a2.length; j++){
            if(Math.abs(a1[i].length - a2[j].length) > max){
                max = Math.abs(a1[i].length - a2[j].length)
            }
        }
    }
    if(a1 == '' || a2 == ''){
        return -1
    }else{
        return max
    }
}

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))