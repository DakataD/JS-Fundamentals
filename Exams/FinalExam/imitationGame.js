function imitationGame(input) {
    let mssg = input.shift();

    let line = input.shift();

    while (line != 'Decode') {
        let tokens = line.split('|');
        let command = tokens.shift();

        switch (command) {
            case 'Move':
                move(tokens[0]);break;
            case 'Insert':
                insert(tokens[0],tokens[1]);break;
            case 'ChangeAll':
                changeAll(tokens[0],tokens[1]);break;
        }
        line = input.shift();
    }
    function move(numOfLetters) {
        numOfLetters = Number(numOfLetters);
        let substr = mssg.substr(0,numOfLetters);
        mssg = mssg.replace(substr,'');
        mssg = mssg+substr;
    }
    function insert(index,value) {
        index = Number(index);
        let part = mssg.slice(0,index);
        let part2 = mssg.slice(index);
        mssg = part+value+part2;
    }
    function changeAll(substr,replacement) {
        while (mssg.includes(substr)) {
            mssg = mssg.replace(substr,replacement);
        }
    }
    console.log(`The decrypted message is: ${mssg}`)
}
    
imitationGame([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode'
]);