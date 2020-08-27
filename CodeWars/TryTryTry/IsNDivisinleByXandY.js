// [FAKE BINARY]

function isDivisible(num,div1,div2){
    if(num % div1 == 0 && num % div2 == 0){
        return true
    }else{
        return false
    }
}

console.log(isDivisible(3,1,3)) // TRUE, Because 3 is Divisible by 1 and 3
console.log(isDivisible(12,2,6)) // TRUE, Because 12 is Divisible by 2 and 6
console.log(isDivisible(100,5,3)) // FALSE, Because 100 is Divisible by 5 BUT not 3