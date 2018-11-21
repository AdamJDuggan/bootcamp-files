function max(numbers) {
    if (Math.max(numbers) === 0){return undefined}
    else return Math.max(...numbers);
  }
  
  function min(numbers){
    if (Math.min(numbers) === 0){return undefined}
    else return Math.min(...numbers);
  }

  function average(numbers) {
    return numbers.reduce((a,b) => a + b, 0) / numbers.length
    }

    function fizzBuzz(countTo) {
        const answer = [];
        for (let x = 1; x <= countTo; x++) {
          if (x % 15 === 0) {
            answer.push('fizzbuzz');
          } else if (x % 5 === 0) {
            answer.push('buzz');
          } else if (x % 3 === 0) {
            answer.push('fizz');
          } else {
            answer.push(x);
          }
        }
        return answer;
      }