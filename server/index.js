const bcrypt = require('bcrypt');    
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const knex = require('./config/database');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())
app.use(cors())

app.post("/register", async (req,res) => {
    const users = await knex('users')
        .insert({
            name: req.body.name,
            username:req.body.username,
            password:req.body.password,
            user_level:req.body.userLevel,
            status: '1'
        })
    return res.end()
})

app.get("/equipments", async(req,res) => {
    const equipments = await knex('equipments').select();
    res.json(equipments)
})

app.get("/users", async(req,res) => {
    const users = await knex('users').select(
        'id',
        'name',
        'username',
        'user_level',
        'status',
        'last_login'
        )
    res.json(users)
})

app.get("/dashboard", async (req, res) => {
    const [users] = await knex('users').count('id',{ as: 'total' }).where({status:1})
    const [sectors] = await knex('sectors').count('id',{ as: 'total'})
    const [equipments] = await knex('equipments').count('id',{ as:'total'})
    const [transfers] = await knex('transfers').count('id',{ as: 'total'})
    res.json({
        sectors:sectors.total, 
        users: users.total, 
        equipments: equipments.total,
        transfers: transfers.total
    })
})


app.listen(3001, () => {
    console.log("Servidor estar rodando na porta 3001")
})