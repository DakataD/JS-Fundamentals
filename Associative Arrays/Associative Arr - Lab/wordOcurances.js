function wordOcurences(input) {
    let list = {};
    for (let word of input) {
        if (!(list.hasOwnProperty(word))) {
            list[word] = 1;
        } else {
            list[word]++;
        }
    }
   let listEntries = Object.entries(list);
   let sortedList = listEntries.sort((a,b) => {
       return b[1] - a[1];
   })
   for (let kvp of sortedList) {
       console.log(`${kvp[0]} -> ${kvp[1]} times`)
   }
}
wordOcurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])