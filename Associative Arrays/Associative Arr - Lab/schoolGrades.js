function schoolGrades(input) {
    let obj = {}
    for (let line of input) {
        let [name,...grades] = line.split(' ');
        grades = grades.map(Number)
        if (!(obj.hasOwnProperty(name))) {
            obj[name] = grades;
        } else {
            for (let grade of grades) {
                obj[name].push(grade);
            }
        }
    }
    let entries = Object.entries(obj);
    let sortedStudents = entries.sort((a,b) => {
       // let studentNameA = a[0];
        let studentGradesA = a[1];
        //let studentNameB = b[0];
        let studentGradesB = b[1];

        let averageGradeA = average(studentGradesA);
        let averageGradeB = average(studentGradesB);

        return averageGradeA - averageGradeB;

    })
    function average(grades) {
        let gradesSum = 0;
        for (grade of grades) {
            gradesSum+=grade;
        }
        return gradesSum / grades.length;
    }

    for (let kvp of sortedStudents) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`)
    }
    
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)