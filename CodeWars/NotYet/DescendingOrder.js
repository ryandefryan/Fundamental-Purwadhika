// [DESCENDING ORDER]
// Status : Done

function descendingOrder(n){
    var num = n.toString()
    var number = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    var result = ''

    for(var i = 0; i < number.length; i++){
        for(var j = 0; j < num.length; j++){
            if(number[i] == (Number(num[j]))){
                result += number[i]
            }
        }
    }

    return Number(result)
  }

  console.log(descendingOrder(42152)) // Result: 54221
  console.log(descendingOrder(1012)) // Result: 2110