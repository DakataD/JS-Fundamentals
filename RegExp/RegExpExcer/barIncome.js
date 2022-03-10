function barIncome(input) {
    let line = input.shift();
    let namePattern = /%(?<name>[A-Z][a-z]+)%/;
    let productPattern = /<(?<product>\w+)>/;
    let countPattern = /\|(?<count>\d+)\|/;
    let pricePattern = /(?<price>\d+(\.\d+)*)\$/;
    let totalPrice = 0;
    while (line != 'end of shift') {
        let nameMatch = line.match(namePattern);
        let productName = line.match(productPattern);
        let count = line.match(countPattern);
        let price = line.match(pricePattern);
        if (nameMatch != null && productName != null && count != null && price != null) {
            let currentPrice = Number(count[1])*Number(price[1]);   
            console.log(`${nameMatch[1]}: ${productName[1]} - ${currentPrice.toFixed(2)} `);
            totalPrice+=currentPrice;
        }
        line = input.shift();
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
barIncome(["%George%<Croissant>|2|10.3$",
"%Peter%<Gum>|1|1.3$",
"%Maria%<Cola>|1|2.4$",
"end of shift"]
);