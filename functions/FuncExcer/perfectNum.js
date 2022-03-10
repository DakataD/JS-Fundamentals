function perfectNum(num) {
    let devisorArr = [];
    for (let i = 1; i<=num; i++) {
        let currentDivisor = Number(i);
        if (num % currentDivisor == 0) {
            devisorArr.push(i);
        }
    }
    let devisorSum = 0;
    for (let devisors of devisorArr) {
        let devisor = Number(devisors);
        devisorSum += devisor;
    }
    if ((devisorSum/2) == num) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.")
    }
}
perfectNum(1236498)