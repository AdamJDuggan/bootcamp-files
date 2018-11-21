const users = [
  {
    name: 'Bernard',
    age: 29,
    birthMonth: 'April',
  },
  {
    name: 'Bernice',
    age: 14,
    birthMonth: 'December',
  },
  {
    name: 'Gerard',
    age: 88,
    birthMonth: 'June',
  },
  {
    name: 'Stella',
    age: 3,
    birthMonth: 'September',
  },
];

users.forEach(user =>
  console.log(`${user.name} will be ${user.age + 1} in ${user.birthMonth}`)
);

// In this example, we iterate each user from an array of user objects. 
// For each one, we print a message that references properties from that individual object.