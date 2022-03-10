function dayOfWeek(num) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]
    let currentDay = days[num-1];
    if ((num-1)<0 || (num-1)>6) {
        console.log('Invalid day!')
    } else {
        console.log(currentDay);
    }
}
dayOfWeek(7)