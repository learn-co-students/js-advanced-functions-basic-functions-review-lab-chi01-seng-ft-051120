function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(punctuation="*") {
  return function(adjective="special") {
  return `You are ${punctuation}${adjective}${punctuation}!`
  }
}

const Calculator = {
  add: function(x, y){ 
      return x + y 
  },
  subtract: function(x, y){
      return x - y
  },
  multiply: function(x, y){
      return x * y
  },
  divide: function(x, y){
      return x / y 
  }
}

function actionApplyer(startingPoint, arrayOfOperations){
  if (arrayOfOperations.length === 0){
      return startingPoint
  }
  let total = startingPoint 
  arrayOfOperations.forEach(operation => total = operation(total))
  return total
} 
