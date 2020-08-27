// [CREATE PHONE NUMBERS]

function createPhoneNumbers(numbers){
    var strNumbers = numbers.join('')
    output = ''
    output += '(' + strNumbers.slice(0, 3) + ')'
    output += strNumbers.slice(3, 6) + '-'
    output += strNumbers.slice(6, strNumbers.length)

    return output
}

console.log(createPhoneNumbers([1,2,3,4,5,6,7,8,9,0]))