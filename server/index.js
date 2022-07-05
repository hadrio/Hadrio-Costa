const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const knex = require('./config/database');
const bodyParser = require('body-parser');
const app = express()
const registerRouter = require('./routes/Register')


app.use("/register", registerRouter);

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())
app.use(cors())

app.put("/" , (req, res) => {
})

app.delete("/", async (req, res) => {
    
})

app.get("/", async (req, res) => {
    const users = await knex('users').select()
    const sectors = await knex('sectors').select()
    const equipments = await knex('equipments').select()
    res.json({sectors, users, equipments})
})


app.listen(3001, () => {
    console.log("Servidor estar rodando na porta 3001")
})