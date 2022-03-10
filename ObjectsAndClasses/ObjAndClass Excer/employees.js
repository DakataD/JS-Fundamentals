function person(arr) {
    for (let employee of arr) {
        let employeeDaata = {
            name: employee,
            personalNumber: employee.length,
        }
    console.log(`Name: ${employeeDaata.name} -- Personal Number: ${employeeDaata.personalNumber}`)
    }
}
person([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
])