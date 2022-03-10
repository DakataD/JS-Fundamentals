function phoneBook(arr) {
    //Tim -> 0876566344
    let contacts = {};
    for (let line of arr) {
        let [name,phone] = line.split(' ');
        contacts[name] = phone;
    }
    
    Object.keys(contacts).forEach(key => {
        console.log(`${key} -> ${contacts[key]}`)
    })
    
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])