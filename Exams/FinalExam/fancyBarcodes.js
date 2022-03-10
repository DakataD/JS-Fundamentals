function fancyBarcodes(input) {
    let numOfBarcodes = Number(input.shift());
    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])@#{1,}/;
    let diggitPattern = /\d/g;
    while (numOfBarcodes>0) {
        let currentBarcode = input.shift();
        let match = currentBarcode.match(pattern);
        if (match == null) {
            console.log('Invalid barcode')
        } else {
            let currentGroup = ''
            let diggit = match[2].match(diggitPattern);
            if (diggit == null ) {
                currentGroup = '00';
                console.log(`Product group: ${currentGroup}`);
            } else {
                for (let n of diggit) {
                    currentGroup+=n;
                }
                console.log(`Product group: ${currentGroup}`);
            }

        }      
        numOfBarcodes--;
    }
}
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])