function memoryGame(arr) {
      let sequence = arr.shift().split(' ');
      let moves = 0;
      
      for (let i = 0; i<arr.length; i++) {
        let tokens = arr[i].split(' ');
        let indexOne = tokens[0];
        let indexTwo = tokens[1];
        if (tokens[0] == 'end') {
          console.log('Sorry you lose :(');
          console.log(sequence.join(' '));
          break;
        }
        indexOne = Number(indexOne);
        indexTwo = Number(indexTwo);
        let firstMatchNum = sequence[indexOne];
        let secondMatchNum = sequence[indexTwo];

        if ((indexOne == indexTwo) || (indexOne<0 || indexOne>=sequence.length) || (indexTwo<0 || indexTwo>=sequence.length)) {
          moves++;
          let middleIndex = Math.trunc(sequence.length/2);
          sequence.splice(middleIndex,0,(`-${moves}a`),(`-${moves}a`));
          console.log('Invalid input! Adding additional elements to the board')
        } else if (firstMatchNum == secondMatchNum) {
          console.log(`Congrats! You have found matching elements - ${firstMatchNum}!`);
          sequence.splice(indexOne,1);
          let indexOfTwin = sequence.indexOf(secondMatchNum);
          sequence.splice(indexOfTwin,1);
          moves++         
        } else if (firstMatchNum != secondMatchNum) {
          moves++;
          console.log('Try again!')
        }
        if (sequence.length == 0) {
          console.log(`You have won in ${moves} turns!`);
          break;
        }
        
      }
}
memoryGame(
 [ 'a 2 4 a 2 4 ', '4 0 ', '0 2', '0 1', '0 1 ', 'end' ]
)