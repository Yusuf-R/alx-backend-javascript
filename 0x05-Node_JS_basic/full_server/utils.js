// 8.1 Organize the structure of the server
// Create a function named readDatabase that accepts a file path as argument:
// It should read the database asynchronously
// It should return a promise
// When the file is not accessible, it should reject the promise with the error

const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    let dataList = [];
    const studentsByField = {};

    const data = await fs.readFile(filePath, 'utf-8');
    dataList = data.toString().trim().split('\n');
    const dataFields = dataList[0].split(',');

    for (let i = 1; i < dataList.length; i += 1) {
      const cf = dataList[i].trim().split(',');

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
    // let result = `Number of students: ${dataList.length - 1}\n`;
    let result = '';

    for (const field in studentsByField) {
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        result += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
      }
    }
    return result.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
// test line
// readDatabase('./database.csv')
//   .then((data) => {
//     // convert data to a list;
//     const list = data.split('\n');
//     console.log(list);
//     // output this list base on if the string has "CS"
//     if (list[0].includes('CS')) {
//       console.log(list[0]);
//     } else {
//       console.log(list[1]);
//     }
//   });
