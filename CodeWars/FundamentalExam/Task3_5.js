function findUniqChar(sentence){
    // Masukan Kedalam Array 
    var sentence = sentence.split(' ')
    var output = ''

    // Hitung Jumlah Tiap Kata
    var obj = {}
    for(var i = 0; i < sentence.length; i++){
        if(Object.keys(obj).includes(sentence[i])){
            obj[sentence[i]] ++
        }else{
            obj[sentence[i]] = 1
        }
    }

    for(var props in obj){
        output += 'Jumlah kata "' + props + '" ada sebanyak ' + obj[props] + '\n'
    }

    // Hitung Jumlah Tiap
    return output
}

console.log(findUniqChar('Jangan Jangan Kamu Pencurinya!'))