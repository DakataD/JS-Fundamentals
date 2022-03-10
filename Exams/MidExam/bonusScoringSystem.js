function bonusScore(arr) {
    let numOfStundents = Number(arr.shift(0));
    let numOfLecturesInCourse = Number(arr.shift(1));
    let courseBonus = Number(arr.shift(2));
    let min = Number.MIN_SAFE_INTEGER;
    let finalStudentAttendeces = 0;

    for (let i = 0; i<arr.length; i++) {
        let studentAttence = Number(arr[i]);
        let finalBonus = studentAttence / numOfLecturesInCourse * (5+courseBonus);
        if (finalBonus>min) {
            min = finalBonus;
            finalStudentAttendeces = studentAttence;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(min)}`);
    console.log(`The student has attended ${finalStudentAttendeces} lectures.`)
}
bonusScore([
  '10', '30', '14', '8',
  '23', '27', '28', '15',
  '17', '25', '26', '5',
  '18'
]
)