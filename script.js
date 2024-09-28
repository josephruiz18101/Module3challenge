// Step 1 Get all the html elements and declare all the variables needed
// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");
// Get the employee table
const employeeTable = document.querySelector("#employee-table");
// define and assign some variables
const employeesData = [];
let continueAdding = true;
// define only
let answer;
let salary;
let firstName;
let lastName;

// Step 2 Create the functions in the order I need them
// Collect employee data
const collectEmployees = function () {
  // DONE: Get user input to create and return an array of employee objects
  while (continueAdding) {
    firstName = prompt("Enter the employee's first name:");
    lastName = prompt("Enter the employee's last name:");
    salary = prompt("Enter the employee's salary:");
    // make salary a number
    salary = Number(salary);
    //makes the employees array into an array of objects
    employeesData.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    });
    answer = Boolean(confirm("Do you want to add another employee?"));
    continueAdding = answer;
  }
  // when this returns it will be saved into the variable collectEmployees
  // return employeesData;
  // no need to return the data. it is easier to call the next function and pass in the required data.
  displayAverageSalary(employeesData);
};
// step 3 the last function calls this function and passes in the employeesData (which is an array of objects holding the employee data)
// Display the average salary
const displayAverageSalary = function (employeesData) {
  // TODO: Calculate and display the average salary
  if (employeesData.length === 0) {
    console.log("No employees to calculate the average salary.");
    return;
  }
  const totalSalary = employeesData.reduce((accumulator, employee) => {
    return accumulator + employee.salary;
  }, 0);
  const averageSalary = totalSalary / employeesData.length;

  console.log(
    `The average employee salary between our ${
      employeesData.length
    } employee(s) is $${averageSalary.toFixed(2)}`
  );
  // call the next function
  getRandomEmployee(employeesData);
};
//step 4 the last function calls this function and passes in the employeesData
// Select a random employee
const getRandomEmployee = function (employeesData) {
  //   // TODO: Select and display a random employee
  if (employeesData.length === 0) {
    console.log("No employees to select from.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * employeesData.length);
  const randomEmployee = employeesData[randomIndex];
  console.log(
    `Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`
  );
  displayEmployees(employeesData);
};
//step 5 This is the final step
// the last function calls this function and passes in the employeesData
// finally display the employee data in the index.html
// Display employee data in an HTML table
const displayEmployees = function (employeesData) {
  // Clear the employee table
  employeeTable.innerHTML = "";
  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesData.length; i++) {
    const currentEmployee = employeesData[i];
    const newTableRow = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);
    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    newTableRow.append(salaryCell);
    employeeTable.append(newTableRow);
  }
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", () => {
  const employeeData = collectEmployees();
});