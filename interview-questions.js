
function tripleAdd(x){
  return function(y){
    return function(z){
      return x + y + z;
    }
  }
}

console.log(tripleAdd(10)(20)(30));

function add(x){
  return function(y){
    return x + y;
  }
}

console.log(add(2)(3));




// IIFE : Immediately Invoked Function Expression
// A function that is executed right after it is created
(function(){
  console.log("This is a IIFE Example")
})();





