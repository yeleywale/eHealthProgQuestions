function PerfectNumber(number){
  var sum = 0;
  var halved = number/2;
  var result = false;

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
