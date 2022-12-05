let result;
let natur = (x,n) => {
  
 if(x >= 1 && n>=1){
   if( x%1 !==0 || n%1 !==0 )
       return "Число не натуральное"
     else
       return Math.pow(x,n);
 }
  };

result = natur(5,2);
console.log(result);