function grades(grade) {
    function fail(grade) {
        if (grade<3) {
            console.log("Fail (2)")
        }
    }
    function poor(grade) {
        if (grade >= 3 && grade < 3.50) {
            console.log(`Poor (${grade.toFixed(2)})`)
        }
    }
    function good(grade) {
        if (grade>=3.50 && grade<4.50) {
            console.log(`Good (${grade.toFixed(2)})`)
        }
    }
    function veryGood(grade) {
        if (grade>=4.50 && grade <5.50) {
            console.log(`Very good (${grade.toFixed(2)})`)
        }
    }
    function excellent(grade) {
        if (grade>=5.50) {
            console.log(`Excellent (${grade.toFixed(2)})`)
        }
    }
    fail(grade);
    poor(grade);
    good(grade);
    veryGood(grade);
    excellent(grade);
}
grades(2.99)