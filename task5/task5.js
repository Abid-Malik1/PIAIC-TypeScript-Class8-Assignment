function removeFailingGrades(grades) {
    for (var i = grades.length - 1; i >= 0; i--) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
        }
    }
    return grades;
}
var gradesList = [85, 42, 65, 30, 75, 90, 20, 55]; // Replace with your list of grades
var passingGrades = removeFailingGrades(gradesList);
console.log("Passing grades:", passingGrades);
