function getCount(str) {
    var vowelsCount = 0;
    
    for(var i = 0; i < str.length; i++){
        if(str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'u' || str[i].toLowerCase() == 'e' || str[i].toLowerCase() == 'o'){
            vowelsCount++
        }
    }
    
    return vowelsCount;
}

console.log(getCount('Abracadabra'))