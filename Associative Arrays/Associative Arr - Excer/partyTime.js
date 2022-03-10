function partyTime(input) {
    let index = 0;
    let guests = input[index];
    index++;
    let diggitList = ['1','2','3','4','5','6','7','8','9','0']
    let listOfGuests = {
        VIP: [],
        regular: [],
    };
    while (guests != 'PARTY') {
        let currentGuest = guests;    
            if (diggitList.includes(currentGuest[0])) {
                listOfGuests.VIP.push(currentGuest);
            
            } else {
                listOfGuests.regular.push(currentGuest);
            
            }       
        guests = input[index];
        index++;
    }
    let indexOfParty = input.indexOf('PARTY');
    let entries = Object.entries(listOfGuests)
    
    for (let i = indexOfParty+1; i<input.length; i++) {
        let currentGuest = input[i];
        
        if (entries[0][1].includes(currentGuest)) {
            let idx = entries[0][1].indexOf(currentGuest);
            entries[0][1].splice(idx,1);
        } else if (entries[1][1].includes(currentGuest)) {
            let idx = entries[1][1].indexOf(currentGuest);
            entries[1][1].splice(idx,1);
        }
    }
    
    let counter = 0;
    for (let n of entries) {
        for (let nums of n[1]) {
            counter++;
        }
    }
    console.log(counter)
    for (let kvp of entries) {
        
        if (kvp[1].length == 0) {
            continue;
        } else {
        console.log(`${kvp[1].join('\n')}`);
        }
    }
}
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
])