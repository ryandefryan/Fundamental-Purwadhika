function longest(s1, s2) {
    var concatStr = s1.concat(s2)
    var arrStr = concatStr.split('').sort()
    var output = []

    for(var i = 0; i < arrStr.length; i++){
        if(arrStr[i] != arrStr[i+1]){
            output.push(arrStr[i])
        }
    }

    return output.join('')
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")