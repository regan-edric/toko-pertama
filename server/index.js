const express = require("express")
const PORT = 3000
const {Sequelize} = require("sequelize")
const app = express()

const sequelize = new Sequelize({
    "username": "root",
    "password": "regangacor123",
    "database": "toko-pertama",
    "host": "127.0.0.1",
    "dialect": "mysql"
})

const connection = async() => {
    try {
        await sequelize.authenticate()
        console.log("Connection to database is success")
    } catch (error) {
        console.error("Unable to connect to database:", error)
    }
}
connection()

app.get("/", (req, res) => {
    res.send("Welcome to the vault")
})

app.listen(PORT, () => {
    console.log(`Server is listening on server ${PORT}`)
})