function isDivisible(num,div1,div2){
    if(((num % div1) == 0) && ((num % div2) == 0)){
        return true
    }else{
        return false
    }
}

console.log(isDivisible(100,5,2)) // True
console.log(isDivisible(10,3,1) ) // False
console.log(isDivisible(12,3,4) ) // True


function monthConverter(month){
    
    var dataMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
    console.log(dataMonth[month-1])

}

console.log(monthConverter(4)) // April
console.log(monthConverter(5)) // Mei

