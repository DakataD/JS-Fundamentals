function storage(input) {
    let list = {};
    for (let line of input) {
        let [product,quantity] = line.split(' ');
        if (!(list.hasOwnProperty(product))) {
            list[product] = Number(quantity);
        } else {
            list[product]+=Number(quantity);
        }
    }
    for (let key in list) {
        console.log(`${key} -> ${list[key]}`);
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)