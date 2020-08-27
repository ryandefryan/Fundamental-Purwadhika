// [NOMOR 1]

function findMedian(angka){
    var median = angka.length % 2 == 1 ? angka[ Math.floor(angka.length/2)] : (angka[(angka.length/2) - 1] + angka[angka.length/2])/2
    return median
}

function removeOutlier(numbers){
    var output = ''

    output += 'Data Asli = ' + numbers + '\n'
    const sorted = [...numbers].sort(function(a,b){return a-b});
    output += 'Data Sorted = ' + sorted + '\n'

    var midd1 = Math.floor(sorted.length/2)
    if(sorted.length % 2 == 1){
        var midd2 = midd1 + 1
    }else{
        var midd2 = midd1
    }

    var firstHalf =  sorted.slice(0, midd1)
    var secondHalf = sorted.slice(midd2)

    output += 'Setengah Data Pertama = ' + firstHalf + '\n' + 
              'Setengah Data Kedua = ' + secondHalf + '\n'

    var q1 = findMedian(firstHalf)
    var q3 = findMedian(secondHalf)
    var iqr = q3 - q1
    var lower = q1 - (1.5 * iqr)
    var upper = q3 + (1.5 * iqr)

    output += 'Q1 = ' + q1 + '\n' +
              'Q3 = ' + q3 + '\n' +
              'Upper = ' + upper + '\n' +
              'Lower = ' + lower + '\n' 

    var newData = []
    for(var i = 0; i < numbers.length; i++){
        var a = numbers[i]
        if(a >= lower && a <= upper){
            newData.push(a)
        }
    }

    output += 'Data yang Tidak Outlier = ' + newData

    return output
}

console.log(removeOutlier([71, 70, 73, 70, 70, 69, 70, 72, 71, 300, 71, 69]))



// [NOMOR 2]

function countVowels(sentences){
    var countVowels = 0
    for(var i = 0; i < sentences.length; i++){
        var char = sentences[i]
        
        if('aiueo'.includes(char.toLowerCase())){
            countVowels++
        }
    }

    console.log(countVowels)
}

countVowels('Budi pergi ke pasar')



// [NOMOR 3]

function given(array){
    var newArr = []  // i < 4
    for(var i = 0 ; i < array.length ; i++){ 
        newArr.push(...array[i])
    }

    newArr.sort(function(a,b){return a-b})
    console.log(newArr)
}

given(
    [
        [3, 2, 1],
        [4, 6, 5],
        [],
        [9, 7, 8]
    ]) 