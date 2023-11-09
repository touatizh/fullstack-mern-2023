const express = require("express")
const { faker } = require("@faker-js/faker")
const app = express()
const port = 8000

app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )

const createUser = () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    return {
        _id: faker.string.uuid(),
        firstName: firstName,
        lastName: lastName,
        email: faker.internet.email({firstName, lastName}),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
    }}

const createCompany = () => ({
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
    }
})

app.get("/api/users/new", (req, res) => res.json(createUser()))

app.get("/api/companies/new", (req, res) => res.json(createCompany()))

app.get("/api/user/company", (req, res) => res.json({
        user: createUser(),
        company: createCompany() }))

app.listen( port, () => console.log(`Listening on port: ${port}`))