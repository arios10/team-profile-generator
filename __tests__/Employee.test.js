//require Employee constructor 
const Employee = require('../lib/Employee');

//create an employee object 
test('creates an employee object', () => {
    const employee = new Employee('Angel', 1, 'ariosfly3@gmail.com');

    expect(employee.name).toBe('Angel');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('ariosfly3@gmail.com');
});

//get employee name
test('get employee name', () => {
    const employee = new Employee('Angel', 1, 'ariosfly3@gmail.com');

    expect(employee.getName()).toBe('Angel');
});

//get employee id 
test('get employee ID', () => {
    const employee = new Employee('Angel', 1, 'ariosfly3@gmail.com');

    expect(employee.getId()).toEqual(1);
});

// get employee email
test('gets employee email', () => {
    const employee = new Employee('Angel', 1, 'ariosfly3@gmail.com');

    expect(employee.getEmail()).toBe('ariosfly3@gmail.com');
});

// get employee role
test('gets role of employee', () => {
    const employee = new Employee('Angel', 1, 'ariosfly3@gmail.com');

    expect(employee.getRole()).toBe("Employee");
}); 