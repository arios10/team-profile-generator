//require Employee constructor 
const Manager = require('../lib/Manager');

//create a manager object  
test('creates a Manager object', () => {
    const manager = new Manager('Angel', 1, 'ariosfly3@gmail.com', 200);
    
    expect(manager.officeNumber).toEqual(200);
});

// get role
test('gets role of employee', () => {
    const manager = new Manager('Angel', 1, 'ariosfly3@gmail.com', 200);

    expect(manager.getRole()).toEqual('Manager');
}); 