function sum (array){
  return array.toString().split(",").map(Number).reduce(function(total,value){
    return total + value;
  })
}
// sum([1,2,[3,4,[5,[6,7,8]]]])
