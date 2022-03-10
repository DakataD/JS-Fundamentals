function wordTracker(input) {
    let requiredWords = input.shift().split(' ');
    let list = {};
    
    for (let i = 0; i<requiredWords.length; i++) {
        let counter = 0;
        let currentWord = requiredWords[i];
        for (let word of input) {
            if (currentWord == word) {
                counter++;
            }
        list[currentWord] = counter;
        }
    }
    for (let kvp of Object.entries(list).sort((a,b) => b[1]-a[1])) {
        console.log(`${kvp[0]} - ${kvp[1]}`)
    }
}
wordTracker([
'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
,'words','this','and','sentence','because','this','is','your','task'
])