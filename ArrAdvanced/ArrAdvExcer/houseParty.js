function houseParty(arr) {

    let list = [];

    for (let i = 0; i<arr.length; i++) {
        let currentString = arr[i].split(' ');
        let name = currentString[0];
        let status = currentString[2];
        
        switch(status) {
            case "going!":
                if(!(list.includes(name))) {
                    list.push(name);
                } else {
                    console.log(`${name} is already in the list!`)
                }
            break;
            case "not":
                if(list.includes(name)) {
                    let index = list.indexOf(name);
                    list.splice(index,1);
                } else {
                    console.log(`${name} is not in the list!`)
                }
            break;
        }
    }
    console.log(list.join('\n'))
}   
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)