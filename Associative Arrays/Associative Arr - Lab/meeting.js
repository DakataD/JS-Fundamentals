function meetings(arr) {
    let list = {}
    for (let line of arr) {
        let [day,name] = line.split(' ');
            if (!(list.hasOwnProperty(day))) {
                list[day] = name;
                console.log(`Scheduled for ${day}`)
            } else {
                console.log(`Conflict on ${day}!`)
            }
        }
    Object.keys(list).forEach(day => {
        console.log(`${day} -> ${list[day]}`)
    })
}
meetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']
)