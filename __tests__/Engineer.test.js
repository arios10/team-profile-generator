//require Employee constructor 
const Engineer = require('../lib/Engineer');

//create an engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Angel', 1, 'ariosfly3@gmail.com', 'arios10');
    
    expect(engineer.name).toBe('Angel');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe('ariosfly3@gmail.com');
    expect(engineer.github).toBe('arios10');
});

//get github
test('get github', () => {
    const engineer = new Engineer('Angel', 1, 'ariosfly3@gmail.com', 'arios10');

    expect(engineer.getGithub()).toBe('arios10');
});

//get role
test('get role', () => {
    const engineer = new Engineer('Angel', 1, 'ariosfly3@gmail.com', 'arios10');

    expect(engineer.getRole()).toBe("Engineer");
});