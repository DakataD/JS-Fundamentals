function race(input) {
    let list = input.shift();

    let line = input.shift();

    let finalList = {}
    

    let diggitPatern = /\d/g;
    let letterPatern = /[A-Za-z]/g;

    while (line != 'end of race') {
        
        let matchLetter = line.match(letterPatern)
        let matchDiggit = line.match(diggitPatern);
        let distance = 0;
        for (let diggit of matchDiggit) {
            diggit = Number(diggit);
            distance+=diggit;
        }
        let name = matchLetter.join('');
        if (list.includes(name)) {
            if (finalList.hasOwnProperty(name)) {
                finalList[name]+=distance;
            } else {
                finalList[name] = distance;
            }
        }

        line = input.shift();
    }
    let finalResult = Object.entries(finalList).sort((a,b) => b[1]-a[1]);
    
    console.log(`1st place: ${finalResult[0][0]}`);
    console.log(`2nd place: ${finalResult[1][0]}`);
    console.log(`3rd place: ${finalResult[2][0]}`);
}
race(["George, Peter, Bill, Tom",
"G4e@55or%6g6!68e!!@",
"R1@!3a$y4456@",
"B5@i@#123ll",
"G@e54o$r6ge#",
"7P%et^#e5346r",
"T$o553m&6",
"end of race"]
);