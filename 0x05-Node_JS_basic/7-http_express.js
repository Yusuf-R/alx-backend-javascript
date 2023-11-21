// create a small HTTP server using the http module:

// When the URL path is /, it should display Hello Holberton School! in the page body
// When the URL path is /students, render file 3-read_file_async.js in the page body
const express = require('express');

const app = express();

const port = 1245;

const fs = require('fs').promises;

const argParsed = process.argv;

if (argParsed.length !== 3) {
  console.log('Error');
  process.exit();
}
const file = argParsed[2].trim().toString();

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
    let result = `Number of students: ${dataList.length - 1}\n`;

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const data = await countStudents(file);
    res.end(data);
  } catch (err) {
    res.end('Cannot load the database');
  }
});

app.listen(port);

module.exports = app;
