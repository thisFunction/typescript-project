enum Role { ADMIN, READ_ONLY, AUTHOR}; //enum

const person = {
    name: 'Adam',
    age: 35,
    hobbies: ['coding', 'music', 'biking'],
    maritalStatus: [2, 'married'],  //Tuple
    role: Role.ADMIN,
    facts: {
        married: true,
        children: 2,
    }
};

if (person.role === Role.ADMIN) {
    console.log(person.role);
}
