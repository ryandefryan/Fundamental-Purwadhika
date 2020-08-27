// [ARRAY ELEMENT PARITY]
// Mempasangkan 2 Buah Bilangan (Positif & Negatif)
// Status : Done

function solve(arr){
    var countArr = 0
    var output = ''

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(Math.abs(arr[i]) == Math.abs(arr[j])){
                countArr += 1
            }
        }
        if(countArr == 1){ // Apabila Bilangan Tersebut Berpasangan Dengan Dirinya Sendiri, Maka Bilangan Tersebut Tidak Berpasangan
            output = arr[i]
        }else{
            countArr = 0
        }
    }

    return output
}

console.log(solve([1,-1,-2,3,2])) // Output: 3 (Karena 3 Tidak Berpasangan)
console.log(solve([-3,1,2,3,-1,-4,-2])) // Output: 4 (Karena 3 Tidak Berpasangan)