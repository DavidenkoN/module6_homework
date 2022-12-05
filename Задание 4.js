let numb = 5
const intervalId = setInterval( function(){
  console.log(numb); 
  numb = numb + 1

}, 1000);

setTimeout(function (){
  
  clearInterval(intervalId)
}, 11000);