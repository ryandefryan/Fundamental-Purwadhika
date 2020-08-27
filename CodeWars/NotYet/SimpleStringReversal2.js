// [SIMPLE REVERSAL STRING 2]
// Me-reverse String Sesuai dengan Index yang Telah Ditentukan
// Status : Done

function solve(st,a,b){
    var tempSt = []
    var output = ''

    if(b > st.length){
        b = st.length-1
    }
    for(var i = 0; i < st.length; i++){
        if(i == b){
            tempSt.push(st[i])
            output += tempSt.reverse().join('')
        }else if(i >= a && i <= b){
            tempSt.push(st[i])
        }else{
            output += st[i]
        }
    }

    return output
}

console.log(solve('codewars', 1, 5)) // Output: cawedors
console.log(solve('codingIsFun', 2, 100)) // Output: conuFsIgnid
console.log(solve('abcdefghijklmnopqrstuvwxyz', 0, 5)) // Output: fedcbaghijklmnopqrstuvwxyz
     