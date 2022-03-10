 function orders(product,quantity) {
    let price = null;

    switch(product) {
        case "coffee":
        price = (a) => a*1.50;
        break;
        case "water":
        price = (a) => a*1.00;
        break;
        case "coke":
        price = (a) => a*1.40;
        break;
        case "snacks":
        price = (a) => a*2.00;
        break;
    }
    return price(quantity); 
}
    console.log(orders("coffee",5))
