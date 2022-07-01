//import express
const express = require('express');
const app = express();
const PORT = 8000;

//import faker
const { faker } = require('@faker-js/faker');

const user = {
  _id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: faker.phone.number(),
  email: faker.internet.email(),
  password: faker.internet.password()
};


const company = {
  _id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  address: {
    street: faker.address.street(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country()
  }
};

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// new user
app.get("/api/users/new", (req,res) => {
  console.log(`creating new user`);
  res.json(user);
});

// new company
app.get("/api/companies/new", (req,res) => {
  console.log(`creating new company`);
  res.json(company);
});

// new user and company
app.get("/api/user/company", (req,res) => {
  console.log(`creating new user and company`);
  res.json({user: user, company: company});
});

// server info
const server = app.listen(PORT, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);