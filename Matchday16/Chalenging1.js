// function findAlpha(sentences, alpha){
//     var count = 0

//     for(var i = 0; i < sentences.length; i++){
//         if(sentences[i] == alpha){
//             count++
//         }
//     }

//     return count
// }

// // console.log(findAlpha('budi pergi ke pasar','b'))
// // console.log(findAlpha('Purwadhika','a'))

// function findMissing(numbers){
//     var min = Math.min(...numbers)
//     var max = Math.max(...numbers)

//     for(var i = min; i <= max; i++){ 
//         if(!numbers.includes(i)){
//             console.log('Angka: ' + i + ' Tidak Ada !!!')
//         }
//     }
// }

// findMissing([1,2,3,5,6,7]) // Output: 4



function countPair(colors){
    var obj = {}

    for(var i = 0; i < colors.length; i++){
        if(Object.keys(obj).includes(colors[i])){
            obj[colors[i]]++
        }else{
            obj[colors[i]] = 1
        }
    }

    var count = 0
    for(var props in obj){
        if(obj[props] >= 2){
            var countsss = Math.floor(obj[props] / 2)
            count += countsss
        }
    }

    console.log(count)
}

countPair(['red','red','blue','yellow']) // 1
countPair(['red','red','red','red']) // 2
countPair(['red','red','red','blue']) // 1
countPair(['red','red','red','blue','yellow','blue']) // 2
countPair(['red','red','red','blue','yellow','blue']) // 2
