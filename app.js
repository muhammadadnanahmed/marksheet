// Function to get user input, calculate percentage, grade, and scholarship
function generateMarksheet() {
  let studentName = prompt("Enter the student's name:");
  let subjects = 5;
  let marks = [];
  let totalMarks = 0;

  // Collect marks for 5 subjects
  for (let i = 1; i <= subjects; i++) {
      let mark = parseInt(prompt(`Enter marks for subject ${i}:`));
      if (!isNaN(mark)) {  // Ensure the entered value is a number
        marks.push(mark);
        totalMarks += mark;
    } else {
        alert("Please enter a valid number.");
        i--; // Decrement the counter to re-ask for the same subject if input is invalid
    }
  }

  let percentage = calculatePercentage(totalMarks, subjects);
  let grade = calculateGrade(percentage);
  let scholarship = calculateScholarship(percentage);

  renderMarksheet(studentName, marks, totalMarks, percentage, grade, scholarship);
}

// Function to calculate percentage
function calculatePercentage(totalMarks, subjects) {
  return (totalMarks / (subjects * 100)) * 100;
}

// Function to determine grade based on percentage
function calculateGrade(percentage) {
  if (percentage >= 90) return "A+";
  else if (percentage >= 80) return "A";
  else if (percentage >= 70) return "B";
  else if (percentage >= 60) return "C";
  else if (percentage >= 50) return "D";
  else return "F";
}

// Function to calculate scholarship discount based on percentage
function calculateScholarship(percentage) {
  if (percentage >= 90) return "50% scholarship";
  else if (percentage >= 80) return "30% scholarship";
  else if (percentage >= 70) return "10% scholarship";
  else return "No scholarship";
}

// Function to render the marksheet using DOM
function renderMarksheet(studentName, marks, totalMarks, percentage, grade, scholarship) {
  const marksheetDiv = document.getElementById("marksheet");

  // Create a table
  let table = document.createElement("table");

  // Add name row
  let nameRow = document.createElement("tr");
  let nameHeading = document.createElement("th");
  nameHeading.colSpan = 2;
  nameHeading.textContent = `Student Name: ${studentName}`;
  nameRow.appendChild(nameHeading);
  table.appendChild(nameRow);

  // Add marks for each subject
  marks.forEach((mark, index) => {
      let row = document.createElement("tr");

      let subjectCell = document.createElement("td");
      subjectCell.textContent = `Subject ${index + 1}`;
      row.appendChild(subjectCell);

      let marksCell = document.createElement("td");
      marksCell.textContent = mark;
      row.appendChild(marksCell);

      table.appendChild(row);
  });

  // Add total marks row
  let totalRow = document.createElement("tr");
  let totalHeading = document.createElement("td");
  totalHeading.textContent = "Total Marks";
  let totalMarksCell = document.createElement("td");
  totalMarksCell.textContent = totalMarks;
  totalRow.appendChild(totalHeading);
  totalRow.appendChild(totalMarksCell);
  table.appendChild(totalRow);

  // Add percentage row
  let percentageRow = document.createElement("tr");
  let percentageHeading = document.createElement("td");
  percentageHeading.textContent = "Percentage";
  let percentageCell = document.createElement("td");
  percentageCell.textContent = percentage.toFixed(2) + "%";
  percentageRow.appendChild(percentageHeading);
  percentageRow.appendChild(percentageCell);
  table.appendChild(percentageRow);

  // Add grade row
  let gradeRow = document.createElement("tr");
  let gradeHeading = document.createElement("td");
  gradeHeading.textContent = "Grade";
  let gradeCell = document.createElement("td");
  gradeCell.textContent = grade;
  gradeRow.appendChild(gradeHeading);
  gradeRow.appendChild(gradeCell);
  table.appendChild(gradeRow);

  // Add scholarship row
  let scholarshipRow = document.createElement("tr");
  let scholarshipHeading = document.createElement("td");
  scholarshipHeading.textContent = "Scholarship";
  let scholarshipCell = document.createElement("td");
  scholarshipCell.textContent = scholarship;
  scholarshipRow.appendChild(scholarshipHeading);
  scholarshipRow.appendChild(scholarshipCell);
  table.appendChild(scholarshipRow);

  // Clear any previous marksheet and append the new table
  marksheetDiv.innerHTML = "";
  marksheetDiv.appendChild(table);
}

// Initialize the marksheet generation when the page loads
window.onload = generateMarksheet;
