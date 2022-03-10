function inventory(arr) {
    let items = arr.shift().split(', ');

    for (let i = 0; i<arr.length; i++) {
        let bags = arr[i].split(' - ');
        let command = bags[0];
        if (command == "Craft!") {
           console.log(items.join(', '));
           break;          
        }
        let currentItem = bags[1];
        
        switch(command) {
            case 'Collect':
                if (!items.includes(currentItem)) {
                        items.push(currentItem)
                }
            break;
            case 'Drop':
                if (items.includes(currentItem)) {
                    let index = items.indexOf(currentItem);
                    items.splice(index,1);
                }
            break;
            case 'Combine Items':
                let twoItems = currentItem.split(':');
                if (items.includes(twoItems[0])) {
                    let index = items.indexOf(twoItems[0]);
                    items.splice(index+1,0,twoItems[1])
                }
            break;
            case 'Renew':
                if (items.includes(currentItem)) {
                    let index = items.indexOf(currentItem);
                    items.splice(index,1);
                    items.push(currentItem);
                }

        }
           
    }
    
}
inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!'
])