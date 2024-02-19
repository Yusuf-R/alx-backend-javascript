interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Sasuke",
  lastName: "Uchiha",
  age: 17,
  location: "Konoha",
};

const studentB: Student = {
  firstName: "Itachi",
  lastName: "Uchiha",
  age: 28,
  location: "Konoha",
};

// Create an array named studentsList containing the two students
const studentsList:Array<Student> = [studentA, studentB];

// Function to render the table
// Function to render the table in the body of the HTML document
function renderTable() {
  // Get the body element from the DOM
  const {body} = document;

  // Create a table element
  const table = document.createElement("table");

  // Create and append table header row
  const headerRow = document.createElement("tr");
  const headerFirstName = document.createElement("th");
  headerFirstName.textContent = "First Name";
  headerRow.appendChild(headerFirstName);
  const headerLocation = document.createElement("th");
  headerLocation.textContent = "Location";
  headerRow.appendChild(headerLocation);
  table.appendChild(headerRow);

  // Iterate over the studentsList array
  studentsList.forEach((student) => {
    // Create a new row element
    const row = document.createElement("tr");

    // Create and append cell elements for firstName and location
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    // Append the row to the table
    table.appendChild(row);
  });

  // Append the table to the body
  body.appendChild(table);
}

// Call the renderTable function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", renderTable);