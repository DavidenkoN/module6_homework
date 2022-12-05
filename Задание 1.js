
function evenOddArr() {
 let arr = [2, 4, 8, null, 10, 101, 0, 3, 5, null, 0];
    
  let even = 0;
  let odd = 0;
  let n = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0 || arr[i] == null) {
            n++;
        }
        else if (arr[i] % 2 === 0) {
            even++;
        }
        else {
            odd++;
      }
    }
  
    console.log(`Четных элементов в массиве ${even}`)
    console.log(`Нечетных элементов в массиве ${odd}`)
    console.log(`Ваших элементов 0 или null ${n}`)
}

 
evenOddArr()
