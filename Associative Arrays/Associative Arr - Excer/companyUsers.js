function companyInfo(input) {
    let list = {};
    for (let line of input) {
        let [company,ID] = line.split(' -> ');
        
        if (!(Object.keys(list).includes(company))) {
            list[company] = [];
        }
        if (!(Object.values(list[company]).includes(ID))) {
            list[company].push(ID)
        } else {
            continue;
        }
    }
    let sortedList = Object.entries(list).sort((a,b) => a[0].localeCompare(b[0]));
    
    for (let [country,ID] of sortedList) {
        console.log(`${country}`);
        let ids = ID.map(x => `-- ${x}`);
        console.log(ids.join('\n'))
    }
}
companyInfo([
'SoftUni -> AA12345',
'SoftUni -> CC12344',
'Lenovo -> XX23456',
'SoftUni -> AA12345',
'Movement -> DD11111'
])