// Create a function named countStudents. It should accept a path in argument
// The script should attempt to read the database file synchronously
// The function should return the number of students!
const fs = require('fs');

// read file function synchronously
function countStudents(filePath) {
  try {
    let dataList = [];
    const studentsByField = {};

    const data = fs.readFileSync(filePath, 'utf-8');
    // create a list from the file data
    dataList = data.toString().trim().split('\n');
    // create the list containing the data fields
    const dataFields = dataList[0].split(',');

    // loop through the data and create an object based on the dynamic data fields
    for (let i = 1; i < dataList.length; i += 1) {
      const cf = dataList[i].trim().split(',');

      // Skip empty lines
      if (!(cf.length === 1 && cf[0].trim() === '')) {
        if (cf.length === dataFields.length) {
          const obj = {};
          for (let j = 0; j < dataFields.length; j += 1) {
            obj[dataFields[j]] = cf[j];
          }
          const { field } = obj;
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }

          studentsByField[field].push(obj.firstname);
        } else {
          // Skip invalid lines
        }
      }
    }
    // Log the results
    console.log(`Number of students: ${dataList.length - 1}`);
    for (const field in studentsByField) {
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        // eslint-disable-next-line max-len
        console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
      }
    }
    // let result = `Number of students: ${dataList.length - 1}\n`;
    // eslint-disable-next-line spaced-comment
    /* eslint max-len: ["error", { "ignoreComments": true }] */
    // for (const field in studentsByField) {
    //   if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
    //     result += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
    //   }
    // }
    // return console.log(result.trim());
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
