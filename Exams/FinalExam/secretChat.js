function secretChat(arr) {
    let mssg = arr.shift();
    let line = arr.shift();

    while (line != 'Reveal') {
        let tokens = line.split(':|:');
        let command = tokens.shift();

        switch (command) {
            case 'InsertSpace':
                insert(tokens[0]);break;
            case 'Reverse':
                reverse(tokens[0]);break;
            case 'ChangeAll':
                changeAll(tokens[0],tokens[1]);break;
        }


        line = arr.shift();
    }
    function insert(index) {
        let firstPart = mssg.substr(0,index);
        let secondPart = mssg.substr(index);
        mssg = firstPart + ' ' + secondPart;
        console.log(mssg)
        
    }
    function reverse(substr) {
        if (mssg.includes(substr)) {
            mssg = mssg.replace(substr,'');
            let reversed = substr.split('').reverse().join('');
            mssg += reversed;
            console.log(mssg)
        } else {
            console.log('error');
        }
    }
    function changeAll(substr,replacement) {
        while (mssg.includes(substr)) {
            mssg = mssg.replace(substr,replacement);
        }
    console.log(mssg);
    }
    console.log(`You have a new text message: ${mssg}`);
}
secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'
])