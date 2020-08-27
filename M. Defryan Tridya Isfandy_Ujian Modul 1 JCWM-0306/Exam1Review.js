function getMedian(numbers){
    if(numbers.length % 2==1){
        var mid = Math.floor(numbers.length/2)
        return numbers[mid]
    }else{
        var mid_1 = numbers.length / 2
        var mid_2 = mid_1-1
        return (numbers[mid_1] + numbers[mid_2]) / 2
    }
}
function getStats(numbers){
    var mean = 0
    var obj = {}

    for(var i = 0 ; i < numbers.length;i++){
        mean += numbers[i]
        if(Object.keys(obj).includes(String(numbers[i]))){
            obj[numbers[i]] ++
        }else{
            obj[numbers[i]] = 1
        }
    }

    numbers = numbers.sort(function(a,b){return a-b})

    // Mean
    mean = mean/numbers.length

    // Median
    var median = getMedian(numbers)

    // Q1 & Q3
    var firstHalf = numbers.length % 2 === 0 ? numbers.slice(0,numbers.length/2) : numbers.slice(0,Math.floor(numbers.length/2))
    var secondHalf = numbers.length % 2 === 0 ? numbers.slice(numbers.length/2) : numbers.slice(Math.ceil(numbers.length/2))
    var q1 = getMedian(firstHalf)
    var q3 = getMedian(secondHalf)

    
    // Mode
    var mode = 0
    for(var props in obj){
        if(obj[props] > mode){
            mode = props
        }
    }

    console.log(mean)
    console.log(median)
    console.log(mode)
    console.log(q1)
    console.log(q3)
}



function alphaWar(alpha1,alpha2){
    var alphabets = 'abcdefghijklmnopqrstuvwxyz'
    var valueAlpha1 = 0
    var valueAlpha2 = 0

    for(var i = 0 ; i < alpha1.length; i ++){
        valueAlpha1 += alphabets.indexOf(alpha1[i]) + 1
    }
    for(var i = 0 ; i < alpha2.length; i ++){
        valueAlpha2 += alphabets.indexOf(alpha2[i]) + 1
    }
    
    if(valueAlpha2 == valueAlpha1){
        console.log('Draw')
    }else if(valueAlpha1 > valueAlpha2){
        console.log(alpha1 + ' win the war')
    }else{
        console.log(alpha2 + ' win the war')
    }
}



function suitJawa(player1,player2){
    if(player1 === player2){
        console.log('Draw')
    }else if((player1 === 'Gajah' && player2 === 'Manusia' )||( player2 ==='Gajah' && player1 === 'Manusia') ){
        console.log('Gajah Menang')
    }else if((player1 === 'Gajah' && player2 === 'Semut') ||( player1==='Semut' && player2 ==='Gajah')){
        console.log("Semut Menang")
    }else if((player1 === 'Manusia' && player2 === 'Semut') || (player2 === 'Manusia' && player1 === 'Semut')){
        console.log("Manusia Menang")
    }else{
        console.log('wrong Input')
    }
}



function makeNegative(numbers){
    var newArr = []
    for(var i = 0 ; i < numbers.length ; i++ ){
        newArr.push(- Math.abs(numbers[i]))
    }

    console.log(newArr)
}



function alphaForward(words,inc){
    var alphabets = 'abcdefghijklmnopqrstuvwxyz'
    var newWords = ''
    for(var i = 0 ; i < words.length ; i ++){
        var index = alphabets.indexOf(words[i])
        index += inc
        newWords += alphabets[index]
    }

    console.log(newWords)
}


alphaForward('abc',1) // Output: bce