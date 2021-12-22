// Your code here
function mapToNegativize(sourceArray){
  let array = []
  for ( let i = 0; i < sourceArray.length; i++){
    let newNum = sourceArray[i] * -1
    array.push(newNum)
  }
  return array
}

function mapToNoChange(sourceArray){
  let array = []
  for ( let i = 0; i < sourceArray.length; i++){
    let newNum = sourceArray[i];
    array.push(newNum);
  }
  return array
}

function mapToDouble(sourceArray){
  let array = []
  for (let i = 0; i < sourceArray.length; i++){
    let newNum = (sourceArray[i]*2)
    array.push(newNum)
  }
  return array
}

function mapToSquare(sourceArray){
  let array = []
  for (let i = 0; i < sourceArray.length; i++){
    let newNum = (sourceArray[i]**2)
    array.push(newNum)
  }
  return array;
}

function reduceToTotal(sourceArray, startingPoint=0){
  let total = startingPoint
  for (let i = 0; i < sourceArray.length; i++){
    total = total + sourceArray[i]
  }
  return total
}

function reduceToAllTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++){
    if (!sourceArray[i]) return false
  }
  return true
}

function reduceToAnyTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++){
    if (sourceArray[i]) return true
  }
  return false
}
