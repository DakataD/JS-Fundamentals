function solve(arr) {
    let neighbourhood = arr.shift().split('@').map(Number);
    
    let startJumpIndex = 0;
    let lastIndex = 0;
    for (let i = 0; i<arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        if (command == 'Love!') {
            break;
        }
        let jumpLength = Number(tokens[1]); 

        let currentIndex = startJumpIndex+jumpLength;
        if (currentIndex >= neighbourhood.length) {
            currentIndex = 0;
        }
        if (neighbourhood[currentIndex] == 0) {
            console.log(`Place ${currentIndex} already had Valentine's day.`);
            
            startJumpIndex = currentIndex;
            lastIndex = currentIndex;
            continue;
        }
        neighbourhood[currentIndex] -=2;
        if (neighbourhood[currentIndex] == 0) {
            console.log(`Place ${currentIndex} has Valentine's day.`)
            startJumpIndex = currentIndex;
            lastIndex = currentIndex;
            continue;
        }
        startJumpIndex = currentIndex;
        lastIndex = currentIndex;
    }
    console.log(`Cupid's last position was ${lastIndex}.`);
        counter = 0;
        let flag = false;
         for (let houses of neighbourhood) {
                if (houses != 0) {
                    counter++;
                    flag = true;
                } 
                
        }
        if (flag) {
             console.log(`Cupid has failed ${counter} places.`);
                } else {
                 console.log(`Mission was successful.`);
    }
}
solve([ 
   '10@10@10@2', 'Jump 1', 'Jump 2', 'Love!' 
 ])