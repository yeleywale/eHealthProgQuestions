function PerfectNumber(number){
  let sum = 0;
  let halved = number/2;
  let result = false;

  for(i = 1; i <= halved; i++){
    if(number % i === 0){
      sum += i;
    }
  }

  if(sum === number){
    result = true;
  }
  else  {
    result = false;
  }

  return result;
}
