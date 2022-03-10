function destinationMapper(str) {
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
    let match = pattern.exec(str);
    let sum = 0;
    let dest = []
    while (match != null) {
        let destinationLength = match[2].length;
        dest.push(match[2]);
        sum+=destinationLength;
        match = pattern.exec(str)
    }
    console.log(`Destinations: ${dest.join(', ')}`);
    console.log(`Travel Points: ${sum}`);
}
destinationMapper('ThisIs some InvalidInput');