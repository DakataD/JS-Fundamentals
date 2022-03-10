function listOfProducts(arr) {
    let finalOrder = '';
    let result = arr.sort((a,b) => a.localeCompare(b));
    for (let i = 0; i<result.length; i++) {
        finalOrder += `${i+1}.${arr[i]}\n`;
    }
    console.log(finalOrder)
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);