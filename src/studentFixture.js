import faker from 'faker/locale/fr';

const randomNumber = Math.floor(Math.random() * 5) + 5
const students = []
for (let i = 0; i < randomNumber; i++) {
  students.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
  })
}

const loadStudents = () => {
  return new Promise((resolve, reject) => {
    resolve(students);
    // reject(`The order could not be completed because some items are sold out.`);
  });
};


export default loadStudents