module.exports = function multiply(first, second) {
  const firstArr = first.split('').reverse();
  //console.log(`First array: ${firstArr}`);
  const secondArr = second.split('').reverse();
  //console.log(`Second array: ${secondArr}`);

  const resultArr = new Array();

  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      let elem = firstArr[i] * secondArr[j];
      if(resultArr[i + j]){
          resultArr[i + j] +=elem 
      }else{
          resultArr[i + j] = elem
      }
    }
  }

  //console.log(`Elements to summ: ${resultArr}`);
  
  for (let i = 0; i < resultArr.length; i++) {
    let num = resultArr[i] % 10;
    let add = Math.floor(resultArr[i] / 10);
    resultArr[i] = num;

    if (resultArr[i+1])
      resultArr[i+1] += add;
    else if (add!= 0)
      resultArr[i+1] = add;
  }
  // console.log(`Not reversed result: ${resultArr}`);
  return resultArr.reverse().join('');
}
