function shopingList(arr) {
    let list = arr[0].split('!');

    for (let i = 1; i<arr.length; i++) {
        if (arr[i] === "Go Shopping!") {
            break;
        }
        let splitItems = arr[i].split(' ');
        let command = splitItems[0];
        let item = splitItems[1];
        let itemTwo = splitItems[2];
            switch (command) {
                case "Urgent":
                    if (!(list.includes(item))) {
                        list.unshift(item);
                    }
                break;
                case "Unnecessary":
                    if (list.includes(item)) {
                        let index = list.indexOf(item);
                        list.splice(index,1);
                    }
                break;
                case "Correct":
                    if (list.includes(item)) {
                        let index = list.indexOf(item);
                        list.splice(index,1,itemTwo);
                    }
                break;
                case "Rearrange":
                    if (list.includes(item)) {
                        let index = list.indexOf(item);
                        list.splice(index,1);
                        list.push(item);
                    }
                break;
            }
        
    }
    console.log(list.join(", "));
}
shopingList(['Milk!Pepper!Salt!Water!Banana',
'Urgent Salt',
'Unnecessary Grapes',
'Correct Pepper Onion',
'Rearrange Grapes',
'Correct Tomatoes Potatoes',
'Go Shopping!'])