function minerTask(input) {
    let list = {};
    for (let i = 0; i<input.length-1; i+=2) {
        let resourse = input[i];
        let quantity = Number(input[i+1]);
        if (!(Object.keys(list).includes(resourse))) {
            list[resourse] = quantity;
        } else {
            list[resourse]+=quantity;
        }
    }
    
    for (let kvp of Object.entries(list)) {
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
}
minerTask([
'gold',
'155',
'silver',
'10',
'copper',
'17',
'gold',
'15'
]
)