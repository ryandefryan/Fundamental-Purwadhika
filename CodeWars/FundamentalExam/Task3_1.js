// [INTERQUARTILE RANGE]

function interquantileRange(number){
    var output = ''
    output += 'Data Asli = [' + number + '] \n'

    var sortNumber = number.sort(function(a, b){return a-b})
    output += 'Data Sorting = [' + sortNumber + '] \n'

    var firstHalf = []
    var secondHalf = []
    for(var i = 0; i < sortNumber.length; i++){
        if(sortNumber.length % 2 == 0){
            var middle = (sortNumber.length / 2) - 1
            if(i <= middle){
                firstHalf.push(sortNumber[i])
            }else{
                secondHalf.push(sortNumber[i])
            }
        }else{
            var middle = Math.floor(sortNumber.length / 2)
            if(i < middle){
                firstHalf.push(sortNumber[i])
            }else if(i > middle){
                secondHalf.push(sortNumber[i])
            }
        }
    }
    output += 'Setengah Data Pertama = [' + firstHalf + '] \n' +
              'Setengah Data Kedua = [' + secondHalf + '] \n' 
    
    var q1 = 0
    var q3 = 0
    for(var i = 0; i < firstHalf.length; i++){
        if(firstHalf.length % 2 == 0){
            var middle = (firstHalf.length / 2)
            q1 = (firstHalf[middle-1] + firstHalf[middle]) / 2
        }else{
            var middle = Math.floor(firstHalf.length / 2)
            q1 = firstHalf[middle]
        }
    }
    for(var i = 0; i < secondHalf.length; i++){
        if(secondHalf.length % 2 == 0){
            var middle = (secondHalf.length / 2)
            q3 = (secondHalf[middle-1] + secondHalf[middle]) / 2
        }else{
            var middle = Math.floor(secondHalf.length / 2)
            q3 = secondHalf[middle]
        }
    }
    output += 'Q1 Adalah = ' + q1 + '\n' +
              'Q3 Adalah = ' + q3 + '\n'

    var iqr = Number(q3) - Number(q1)
    var lowerLimit = Number(q1 - 1.5 * iqr)
    var upperLimit = Number(q3 + 1.5 * iqr)
    output += 'Lower Limit = ' + lowerLimit + '\n' +
              'Upper Limit = ' + upperLimit + '\n'

    var dataOutlier = []
    for(var i = 0; i < sortNumber.length; i++){
        if(sortNumber[i] >= lowerLimit && sortNumber[i] <= upperLimit){
            dataOutlier.push(sortNumber[i])
        }
    }
    output += 'Data Outlier = [' + dataOutlier + '] \n'

    return output
}

console.log(interquantileRange([71, 70, 73, 70, 70, 69, 70, 72, 71, 300, 71, 69]))
console.log(interquantileRange([60, 63, 64, 62, 69, 60, 63, 64, 60]))