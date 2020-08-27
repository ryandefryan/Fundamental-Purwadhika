// [SORTING THE ODD WAY]
// Mengurutkan Bilangan Ganjil dari Nilai yang Terkecil dan Mengurutkan Bilangan Genap dari Nilai yang Terbesar
// Status: Done

function sortItOut(array){
    var oddNumbers = []
    var evenNumbers = []
    var output = []

    for(var i = 0; i < array.length; i++){
        if(Math.floor(array[i]) % 2 == 0){
            evenNumbers.push(array[i])
        }else{
            oddNumbers.push(array[i]) 
        }
    }

    oddNumbers = oddNumbers.sort(function(a, b){ return a-b })
    evenNumbers = evenNumbers.sort(function(a, b){ return b-a })
    output = oddNumbers.concat(evenNumbers)

    return output
}

console.log(sortItOut([96, 91.4, 84.9, 82.6, 79.9, 76.6, 74.9, 67.7, 55.6, 52.2, 50.2, 41.2, 35.4, 34.7, 24.2, 24, 22, 9.5, 8.5, 2.5, 0.7])) // Output: [11, 33, 55, 55, 90.4, 78, 44, 22, 4]