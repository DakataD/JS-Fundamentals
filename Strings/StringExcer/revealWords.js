function reveal(words,text) {
    
    words = words.split(', ');
    let textArray = text.split(' ');
    let arr = [];
    for (let token of textArray) {
        let replaced = false;
        for (let word of words) {
            if (token == '*'.repeat(word.length)) {
                arr.push(word);
                replaced = true;
            } 
        }
        if (replaced == false) {
            arr.push(token)
        }
    }
    console.log(arr.join(' '))
}
reveal('great, learning',
'softuni is ***** place for ******** new programming languages'
)