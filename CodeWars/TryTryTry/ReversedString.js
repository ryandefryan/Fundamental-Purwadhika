function solution(str){
    var output = ''
    for(var i = str.length-1; 0 <= i; i--){
        output += str[i]
    }

    return output
}

console.log(solution('World'))