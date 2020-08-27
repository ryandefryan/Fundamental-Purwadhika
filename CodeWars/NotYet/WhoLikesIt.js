// [WHO LIKES IT]
// Status : Done

function likes(names) {
    var output = ''

    if(names.length == 0){
        output += 'no one likes this'
    }

    for(var i = 0; i < names.length; i++){
        if(names.length == 1){
            output += names[i] + ' likes this'
        }else if(names.length == 2){
            if(i == ((names.length)-1)){
                output += ' and ' + names[i] + ' like this'
            }else{
                output += names[i]
            }
        }else if(names.length == 3){
            if(i == ((names.length)-1)){
                output += ' and ' + names[i] + ' like this'
            }else if(i == 0){
                output += names[i] + ', '
            }else{
                output += names[i]
            }
        }else if(names.length > 3){
            if(i == ((names.length)-1)){
                var countOthers = names.length - 2
                output += ' and ' + countOthers +' others like this'
            }else if(i == 0){
                output += names[i] + ', '
            }else if(i == 1){
                output += names[i]
            }
        }
    }
    return output
}

console.log(likes([]))
console.log(likes(['Max']))
console.log(likes(['Max', 'John']))
console.log(likes(['Max', 'John', 'Karl', 'Jacob', 'Budy']))