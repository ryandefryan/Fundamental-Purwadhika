// [HASHTAG]

function hashtag(sentence){
    var arrSentence = sentence
    var output = ''

    for(var i=0; i < arrSentence.length; i++){
        if(i == 0){
            output += '#' + arrSentence[i].toUpperCase()
        }else if(arrSentence[i-1] == ' '){
            output += arrSentence[i].toUpperCase()
        }else{
            output += arrSentence[i]
        }
    }

    output = output.replace(/ /g, '')
    return output
}

console.log(hashtag('hello world!'))