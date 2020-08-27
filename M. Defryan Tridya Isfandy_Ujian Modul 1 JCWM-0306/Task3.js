function suitJawa(suit1, suit2){
    if((suit1.toLowerCase() == 'elephant' && suit2.toLowerCase() == 'ant') || (suit1.toLowerCase() == 'ant' && suit2.toLowerCase() == 'elephant')){
        return 'Won By Ant'
    }else if((suit1.toLowerCase() == 'human' && suit2.toLowerCase() == 'elephant') || (suit1.toLowerCase() == 'elephant' && suit2.toLowerCase() == 'human')){
        return 'Won By Elephant'
    }else if((suit1.toLowerCase() == 'human' && suit2.toLowerCase() == 'ant') || (suit1.toLowerCase() == 'ant' && suit2.toLowerCase() == 'human')){
        return 'Won By Human'
    }else{
        return 'Draw'
    }
}

console.log(suitJawa('elephant', 'ant'))
console.log(suitJawa('ant', 'elephant'))
console.log(suitJawa('human', 'elephant'))
console.log(suitJawa('elephant', 'human'))
console.log(suitJawa('human', 'ant'))
console.log(suitJawa('ant', 'human'))
console.log(suitJawa('human', 'human'))
console.log(suitJawa('ant', 'ant'))