// Step 1: Create Employee Object

let employee: {
    empId: number;
    empName: string;
    department?: string;
    isActive: boolean;
    salary: number;
    location?: string;
} = {
    empId: 101,
    empName: "Rinesh",
    department: "QA",
    isActive: true,
    salary: 6000,
};

// Step 2: Access properties using dot notation

console.log("empId:", employee.empId);
console.log("empName:", employee.empName);
console.log("department:", employee.department);

// Step 3: Update salary and isActive

employee.salary = 7000;
employee.isActive = false;

console.log("Updated Salary:", employee.salary);
console.log("Updated Status:", employee.isActive);

// Step 4: Add new property

employee.location = "Chennai";

console.log("Location:", employee.location);

// Step 5: Delete property

delete employee.department;

// Step 6: Print final object

console.log("Final Employee Object:");
console.log(employee);