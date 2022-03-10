function worldTour(arr) {
    let stops = arr.shift();
    let line = arr.shift();
    

    while (line != 'Travel') {
        let tokens = line.split(':');
        let command = tokens.shift();

         switch (command) {
            case 'Add Stop':
                addStop(tokens[0],tokens[1]);break;
            case 'Remove Stop':
                removeStop(tokens[0],tokens[1]);break;
            case 'Switch':
                swap(tokens[0],tokens[1]);break;
        }
        line = arr.shift();
    }

    function addStop(index,str) {
        index = Number(index);
        if (index>=0 && index<stops.length) {
            let firstPart = stops.slice(0,index);
            let secondPart = stops.slice(index);
            let result = firstPart+str+secondPart;
            stops = result;
            console.log(stops)
        }
    }
    function removeStop(startIndex,endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        if ((startIndex>= 0 && startIndex<stops.length) && (endIndex>=0 && endIndex<stops.length)) {
            let cut = stops.substring(startIndex,endIndex+1);
            stops = stops.replace(cut,'');
        }
        console.log(stops)
    }
    function swap(oldString,newString) {
        if(stops.includes(oldString)){
            let splitted = stops.split(oldString);
            stops = splitted.join(newString);
        }
        console.log(stops)
       
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)

}   
worldTour([
  'Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Bulgaria',
  'Travel'
])