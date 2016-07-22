function changeCompletely(element, index, array){
  array[index] = (Math.random() * 100).toString + '!!!'
};

var animals = ["dog", "fish", "cat"]

function doToElementsInArray(animals, callback){
  animals.forEach(callback)
};
