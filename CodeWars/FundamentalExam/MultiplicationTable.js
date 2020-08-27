function multiTables(row, col){
    var tempNum = 0
    var output = ''

    for(var i = 1; i <= row; i++){ // 1
        for(var j = 1; j <= col; j++){ // 1
            if(j == 1){
                output += i + ' '
                tempNum = i
            }else{
                output += tempNum + i + ' '
                tempNum = tempNum + i
            }
        }
        output += '\n'
        tempNum = 0
    }

    return output
}

console.log(multiTables(3, 3))
// Output:
// 1 2 3 
// 2 4 6
// 3 6 9