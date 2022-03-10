function adressBook(input) {
    let book = {};
    for (let line of input) {
        let [name,adress] = line.split(':') 
        book[name] = adress;
    }

    let sortedBook = {};
    for (let key of Object.keys(book).sort((a,b) => a.localeCompare(b))) {
        sortedBook[key] = book[key]
    }
    for (let pages in sortedBook) {
        console.log(`${pages} -> ${sortedBook[pages]}`);
    }
}
adressBook(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd']
)