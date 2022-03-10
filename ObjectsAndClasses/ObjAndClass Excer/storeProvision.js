function storeProvision(arr1,arr2) {
    let store = []
    for (let i = 0; i<arr1.length-1; i+=2) {
        let typeOfProduct = arr1[i];
        let quantity = Number(arr1[i+1]);
        let obj = {
            typeOfProduct: typeOfProduct,
            quantity: quantity
        }
        store.push(obj)
    } 
    for (let i = 0; i<arr2.length-1; i+=2) {
        let typeOfProduct = arr2[i];
        let quantity = Number(arr2[i+1]);

        let obj = {
            typeOfProduct: typeOfProduct,
            quantity: quantity
        }
    let indexOfProduct = store.findIndex(x => x.typeOfProduct == typeOfProduct);
    
    if (indexOfProduct == -1) {
        store.push(obj);
    } else {
        store[indexOfProduct].quantity += quantity;
    }
    }
    for (let el of store) {
        console.log(`${el.typeOfProduct} -> ${el.quantity}`)
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],

['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])