function passValidator(arr) {
    let password = arr.shift();
    let line = arr.shift();

    while (line != 'Done') {
        let tokens = line.split(' ');
        let command = tokens.shift();

        switch (command) {
            case 'TakeOdd':
                takeOdd();break;
            case 'Cut':
                cut(tokens[0],tokens[1]);break;
            case 'Substitute':
                substitude(tokens[0],tokens[1]);break;
        }

        line = arr.shift();
    }
    function takeOdd() {
        let result = '';
            for (let i = 0; i<password.length; i++) {
                if (i % 2 !=0) {
                result+=password[i];
                }
            }
        
        password = result;
        console.log(password)
    }
    function cut(index,length) {
        index = Number(index);
        length = Number(length);
        
        let substr = password.substring(index,index+length);
        password = password.replace(substr, '')
        console.log(password)
    }
    function substitude(substr,substitude) {
        let flag = false;
        if (password.includes(substr)) {
        while (password.includes(substr)) {
            password = password.replace(substr,substitude);
            flag = true;  
        }
    } else {
        console.log(`Nothing to replace!`);
    }
    if (flag) {
        console.log(password)
    }
   
        
    }
    console.log(`Your password is: ${password}`)
}
passValidator((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
)