function XO(str) {
    var countExes = 0
    var countOhs = 0

    for(var i = 0; i < str.length; i++){
        if(str[i].toLowerCase() == 'x'){
            countExes++
        }else if(str[i].toLowerCase() == 'o'){
            countOhs++
        }
    }

    if(countExes == countOhs){
        return true
    }else{
        return false
    }
}

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);