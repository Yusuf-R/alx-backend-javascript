const fs = require('fs').promises;

async function countStudents(filePath) {
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

    console.log(`Number of students: ${dataList.length - 1}`);
    for (const field in studentsByField) {
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
