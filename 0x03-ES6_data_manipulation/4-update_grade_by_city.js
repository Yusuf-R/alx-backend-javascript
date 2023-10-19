/* eslint-disable brace-style */
/* eslint-disable no-param-reassign */
// Create a function updateStudentGradeByCity that returns an array of students
// for a specific city with their new grade

// It should accept a list of students (from getListStudents), a city (String),
// and newGrades (Array of “grade” objects) as parameters.

// newGrades is an array of objects with this format:

export default function updateStudentGradeByCity(array, city, newGrades) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array
    .filter((x) => x.location === city)
    .map((x) => {
      const newGrade = newGrades.find((y) => y.studentId === x.id);
      if (newGrade) {
        x.grade = newGrade.grade;
      }
      // If no grade was found, set the grade to “N/A”
      else if (!newGrade) {
        x.grade = 'N/A';
      } return x; // Return the modified student object
    });
}
