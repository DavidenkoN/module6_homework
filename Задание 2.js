
function numb (n){
  if ((n<2) || (n>1000))
    {
      if(n == 1 || n == 0)
        console.log("нет")
      else 
        console.log("Данные неверны") 
    }
  else{
    let prime = true
    for(let i = 2; i < n; i++){
      if(n % i === 0){
        prime = false
      }
    }
    console.log(prime ? " Простое число" : "нет")
  }
}
  numb(1)
