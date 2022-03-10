function grades(currentGrade) {
    if (currentGrade>= 5.50) {
        console.log(`Excellent (${(currentGrade.toFixed(2))})`);
    } else if (currentGrade>=4.50 && currentGrade<5.50) {
        console.log(`Very good (${currentGrade.toFixed(2)})`);
    } else if (currentGrade>=3.50 && currentGrade<4.50) {
        console.log(`Good (${currentGrade.toFixed(2)})`)
    } else if (currentGrade>=3.00 && currentGrade<3.50) {
        console.log(`Poor (${currentGrade.toFixed(2)})`)
    } else {
        console.log(`Fail (${2})`)
    }
}
grades(2.99)