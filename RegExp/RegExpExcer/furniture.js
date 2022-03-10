function furniture(input) {
    let line = input.shift();

    let pattern = /^>>(?<name>[A-Za-z]+)<<(?<price>(\d+(?:\.\d+)?))!(?<qty>\d+(\.\d+)*)$/;

    let totalPrice = 0;
    let furniture = [];

    while (line != 'Purchase') {
        
        let match = pattern.exec(line)
        if (match != null) {
            let name = match.groups.name;
            let price = Number(match.groups.price);
            let qty = Number(match.groups.qty);
            qty = Math.floor(qty);
            furniture.push(name);
            totalPrice +=price*qty;
        }
        
        line = input.shift();
    }
    console.log("Bought furniture:");
    for (let item of furniture) {
        console.log(item)
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
}
furniture([">>Sofa<<312.23!3.33",">>TV<<300!5",
">Invalid<<!5",
"Purchase"]);