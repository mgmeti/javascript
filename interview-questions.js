
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


// Five button problem
// 1. using IIFE
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
  
     (function (num){
          button.onclick = function() {
          alert('This is button ' + num);
     }
     })(i);
     body.appendChild(button);
   }
} 
createButtons();

// 2. Using let keyword as it is block scoped
function createButtons() {
   for (let i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function(){
       alert('Button '+ i );
     }

     body.appendChild(button);
   }
} 
createButtons();

// 3. Using a function 
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     addClickFunctionality(button, i);


     body.appendChild(button);
   }
} 
createButtons();
function addClickFunctionality(button, num){
       button.onclick = function(){
       alert('Button '+ num );
     }  
}





