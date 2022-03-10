function heartDelivery(arr) {
    let houses = arr.shift().split('@').map(Number);
    let command = arr.shift();
    
    let currentIndex = 0;

    while (command !== 'Love!') {
        let tokens = command.split(' ');
        let jumpLength = +tokens[1];

        currentIndex+=jumpLength;

        if (currentIndex >= houses.length) {
            currentIndex = 0;
        }
        if (houses[currentIndex] == 0) {
            console.log(`Place ${currentIndex} already had Valentine's day.`);
        } else {
            houses[currentIndex] -= 2;
            if (houses[currentIndex] == 0) {
                console.log(`Place ${currentIndex} has Valentine's day.`)
            }
        }
    command = arr.shift();
    }
    console.log(`Cupid's last position was ${currentIndex}.`)

    let isSuccess = true;
    let counter = 0;

    for (let house of houses) {
        if (house != 0) {
            isSuccess = false;
            counter++;
        }
    }
    if (!(isSuccess)) {
        console.log(`Cupid has failed ${counter} places."`)
    } else {
        console.log(`Mission was successful.`)
    }
}
            // [ 10, 10 ,10 ,2 ]
heartDelivery(['10@10@10@2','Jump 1','Jump 2','Love!'])