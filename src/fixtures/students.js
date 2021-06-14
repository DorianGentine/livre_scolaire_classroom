import faker from 'faker/locale/fr';

const randomNumber = Math.floor(Math.random() * 5) + 5
const students = []
for (let i = 0; i < randomNumber; i++) {
  students.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
  })
}

export default students