function thePianist(arr) {
    let numOfPieces = Number(arr.shift());
    let songList = {};

    while (numOfPieces>0) {
      let [piece,composer,key] = arr.shift().split('|');
      songList[piece] = {composer,key}
      numOfPieces--;
    }
    let line = arr.shift();
    while(line != 'Stop') {
      let tokens = line.split('|');
      let command = tokens.shift();
      switch (command) {
        case 'Add':
          add(tokens[0],tokens[1],tokens[2]);break;
        case 'Remove':
          remove(tokens[0]);break;
        case 'ChangeKey':
          changeKey(tokens[0],tokens[1]);break;
      }

      line = arr.shift();
    }
    function add(piece,composer,key) {
      if (!(songList.hasOwnProperty(piece))) {
        songList[piece] = {composer,key};
        console.log(`${piece} by ${composer} in ${key} added to the collection!`)
      } else {
        console.log(`${piece} is already in the collection!`);
      }
    }
    function remove(piece) {
      if (!(songList.hasOwnProperty(piece))) {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`)
      } else {
        delete songList[piece];
        console.log(`Successfully removed ${piece}!`);
      }
    }
    function changeKey(piece,newKey) {
      if (!(songList.hasOwnProperty(piece))) {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`)
      } else {
        songList[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      }
    }
    let sorted = Object.entries(songList).sort((a,b) => a[0].localeCompare(b[0]) || (a[1].composer).localeCompare(b[1].composer));
    
    for (let kvp of sorted) {
      console.log(`${kvp[0]} -> Composer: ${kvp[1].composer}, Key: ${kvp[1].key}`)
    }
}   
thePianist([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop'
]);