function computerStore(arr) {
    let priceWithoutTaxes = 0;
    let taxes = 0;
    let priceWithTaxes = 0;
    for (let i = 0; i<arr.length; i++) {
        let value = arr[i];
        if (value == 'special') {
            if (priceWithTaxes == 0) {
                console.log('Invalid order!');
                break;
            }
            priceWithTaxes = priceWithTaxes - 0.1*priceWithTaxes;
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log(`-----------`);
            console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`);
            break;
        } else if (value == 'regular') {
            if (priceWithTaxes == 0) {
                console.log('Invalid order!');
                break;
            }
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log(`-----------`);
            console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`);
            break;
        }
        value = Number(arr[i]);
        if (value < 0) {
            console.log('Invalid price!');
            continue;
        }       
        priceWithoutTaxes+=value;
        let currentTaxes = 0.2*value;
        taxes += currentTaxes;
        let valueWithTaxes = value + 0.2*value;
        priceWithTaxes+=valueWithTaxes;
    }
}
computerStore([
 
  [ 'regular' ]

])