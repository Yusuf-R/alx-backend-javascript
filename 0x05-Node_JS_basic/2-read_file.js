// Create a function named countStudents. It should accept a path in argument
// The script should attempt to read the database file synchronously
// The function should return the number of students!
const fs = require('fs');

const { log } = console;

// read file function synchronously
function countStudents(filePath) {
  try {
    let dataList = [];
    const sweObj = {};
    const csObj = {};
    const data = fs.readFileSync(filePath, 'utf-8');
    // create a list from the file data
    dataList = data.toString().trim().split('\n');
    // create the list containing the data fields
    const dataFields = dataList[0].split(',');
    // loop through the data and create an object base on the data fields[3]
    for (let i = 1; i < dataList.length; i += 1) {
      const cf = dataList[i].trim().split(',');
      const obj = {};
      for (let j = 0; j < dataFields.length; j += 1) {
        obj[dataFields[j]] = cf[j];
      }
      if (cf[3] === 'SWE') {
        sweObj[`student_${i}`] = obj;
      } else if (cf[3] === 'CS') {
        csObj[`student_${i}`] = obj;
      }
    }
    // create a list of students firstname for both object
    const csStudents = Object.keys(csObj).map((key) => csObj[key].firstname);
    const sweStudents = Object.keys(sweObj).map((key) => sweObj[key].firstname);

    log(`Number of students: ${dataList.length - 1}`);
    log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    throw Error('Cannot load the database');
  }
}
module.exports = countStudents;
