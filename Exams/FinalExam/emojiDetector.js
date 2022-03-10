function emojiDetector(input) {
    let text = input.shift();
    let treshPattern = /\d/g;
    let tresh = text.match(treshPattern);
    let coolTreshhold = Number(tresh.reduce((x,y) => x*y));
    
    let emojiPattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
    let match = emojiPattern.exec(text);

    let emojiCounter = 0;
    let coolEmojies = [];
    while (match != null) {
        let currentEmoji = match[2];
        emojiCounter++;
        let coolness = 0;
        for (let i = 0; i<currentEmoji.length; i++) {
            let letter = currentEmoji.charCodeAt(i);
            coolness+=letter;
        }
        if (coolness>coolTreshhold) {
            coolEmojies.push(match[0]);
        }

        match = emojiPattern.exec(text)
    }
    console.log(`Cool threshold: ${coolTreshhold}`);
    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);
    console.log(coolEmojies.join('\n'));
    
}
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])