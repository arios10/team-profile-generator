//require Employee constructor
const Intern = require('../lib/Intern');

//create an intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Angel', 1, 'ariosfly3@gmail.com', 'UofA');
    
    expect(intern.school).toBe('UofA');
});

// get school
test('get employee school', () => {
    const intern = new Intern('Angel', 1, 'ariosfly3@gmail.com', 'UofA');
    
    expect(intern.getSchool()).toBe('UofA');
});

// get role
test('gets role of employee', () => {
    const intern = new Intern('Angel', 1, 'ariosfly3@gmail.com', 'UofA');

    expect(intern.getRole()).toEqual('Intern');
}); 