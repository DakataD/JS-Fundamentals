function nationalCourt(input) {
    input = input.map(x => Number(x));
    let [firstEmployeePH,secondEmployeePH,thirdEmployeePH,totalPplCount] = [input[0],input[1],input[2],input[3]];

    let employes = 3;
    let breakHoursCounter = 0;
    let hoursCounter = 0;
    
    let pplPerHourByAllEmployees = firstEmployeePH+secondEmployeePH+thirdEmployeePH;

    let answeredePpl = 0;
    while (true) {
        if (answeredePpl >= totalPplCount) {
            break;
        }
        breakHoursCounter++;
        hoursCounter++;
        if (breakHoursCounter == 4) {
            breakHoursCounter = 0;
            answeredePpl-=pplPerHourByAllEmployees;
        }
        answeredePpl+=pplPerHourByAllEmployees;
        
    }
    console.log(`Time needed: ${hoursCounter}h.`)

}
nationalCourt(["1","2","3","45"])