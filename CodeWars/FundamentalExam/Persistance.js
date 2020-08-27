function persistance(n){
    var num = n.toString()
    var tempNum = 0
    var total = 0

    do{
        for(var i = 0; i < num.length; i++){
            if(i == 0){
                tempNum = num[i]
            }else if(i == num.length-1){
                tempNum = tempNum * num[i]
                num = tempNum.toString()
            }else{
                tempNum = tempNum * num[i]
            }
        }
    }while(num.length != 1)

    return Number(tempNum)
}

console.log(persistance(32)) // Output: 3 x 2 = 6
console.log(persistance(353)) // Output: 3 x 5 x 3 = 45 ---> 4 x 5 = 20 ---> 2 x 0 = 0 
console.log(persistance(4)) // Output: 4