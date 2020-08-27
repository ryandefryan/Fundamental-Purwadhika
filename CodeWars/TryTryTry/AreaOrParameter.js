const areaOrPerimeter = function(l , w) {
    var result = 0
    
    if(l != w){
        result += 2 * (l + w)
    }else{
        result += l * w
    }

    return result
}

console.log(areaOrPerimeter(3, 3))
console.log(areaOrPerimeter(5, 10))