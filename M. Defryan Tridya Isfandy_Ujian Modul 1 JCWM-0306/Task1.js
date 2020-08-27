function findMedian(numbers){
    var median = 0

    if(numbers.length % 2 == 0){
        var middle = (numbers.length / 2)
        median = (numbers[middle] + (numbers[middle-1])) / 2
    }else{
        var middle = Math.floor(numbers.length / 2)
        median = numbers[middle]
    }

    return median
}

function getStats(numbers){
    var output = ''



    // Menampilkan Data
    output += 'Data Asli = ' + numbers + '\n'
    var numbersSorted = numbers.sort(function(a,b){return a-b});



    // Mencari Mean
    var totalNumbers = 0
    for(var i = 0; i < numbersSorted.length; i++){
        totalNumbers += numbersSorted[i]
    }
    var mean = totalNumbers / numbersSorted.length
    output += 'Mean = ' + mean + '\n'



    // Mencari Median
    output += 'Median = ' + findMedian(numbersSorted) + '\n'



    // Mencari Modus
    var tempCount = 0
    var count = 0
    var modus = 0
    for(var i = 0; i < numbersSorted.length; i++){
        tempCount++
        if(numbersSorted[i] != numbersSorted[i+1] && tempCount > count){
            count = tempCount
            modus = numbersSorted[i]
            tempCount = 0
        }else if(numbersSorted[i] != numbersSorted[i+1]){
            tempCount = 0
        }
    }
    output += 'Modus = ' + modus + '\n'



    // Mencari Q1 dan Q3
    if(numbersSorted.length % 2 == 0){
        var midd1 = Math.floor(numbersSorted.length/2)
    }else{
        var midd1 = Math.floor(numbersSorted.length/2) + 1
    }

    var firstHalf =  numbersSorted.slice(0, midd1)
    var secondHalf = numbersSorted.slice(midd1, numbersSorted.length)
    var q1 = findMedian(firstHalf)
    var q3 = findMedian(secondHalf)
    output += 'Q1 = ' + q1 + '\n' +
              'Q3 = ' + q3

    return output
}

console.log(getStats([3, 4, 5, 4, 5, 3, 2, 4, 6, 6]))