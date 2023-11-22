// 8.3 Write the Students controller
const argParsed = process.argv;

const readDatabase = require('../utils');

if (argParsed.length !== 3) {
  console.log('Error');
  process.exit();
}
const file = argParsed[2].trim().toString();

class StudentsController {
  static async getAllStudents(req, res) {
    /*
     * it calls the function readDatabase from the utils file, and display in the page:
     * First line: This is the list of our students
     * And for each field (order by alphabetic order case insensitive),
     * a line that displays the number of students in the field,
     * and the list of first names (ordered by appearance in the database file)
     * with the following format:
     * Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
     * if the database is not available, it should return a status 500
     * and the error message Cannot load the database
     */
    try {
      const data = await readDatabase(file);
      res.write('This is the list of our students\n');
      res.status(200);
      res.end(data);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    // It uses a parameter that the user can pass to the browser major.
    // The major can only be CS or SWE. If the user is passing another parameter,
    // the server should return a 500
    // and the error Major parameter must be CS or SWE
    // extract the parameter called major from the request

    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      try {
        // we call the function readDatabase from the utils file
        const data = await readDatabase(file);
        // we convert the data to be a list of objects
        const dataList = data.split('\n');
        // we set our output data base on the major passed
        const filteredData = dataList.filter((item) => item.includes(major));
        // we display the result in the page
        res.status(200).send(filteredData[0]);
      } catch (err) {
        res.status(500).send('Cannot load the database');
      }
    }
  }
}

module.exports = StudentsController;
