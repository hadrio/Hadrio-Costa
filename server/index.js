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
            status: req.body.status
        })
    return res.end();
})

app.post("/register_equipment", async (req,res) => {
    console.log(req.body.createdAt)
    const equipments = await knex('equipments')
        .insert({
            tombo: req.body.tombo,
            specifications: req.body.specifications,
            obs: req.body.obs,
            types_equip_id: req.body.typeEquipment,
            manufacturer_id: req.body.equipManufacturer,
            situation_id: req.body.equipSituation,
            created_by:'1',
            created_at: new Date(),
        })
    return res.end();
})

app.get("/equipments", async(req,res) => {
    const equipments = await knex('equipments').select();
    res.json(equipments)
})

app.get("/manufacturers", async(req,res) => {
    const manufacturers = await knex('manufacturers').select();
    res.json(manufacturers);
})

app.get("/sectors", async(req,res) => {
    const sectors = await knex('sectors').select();
    res.json(sectors);
})

app.get("/situations", async(req,res) => {
    const situations = await knex('situations').select();
    res.json(situations);
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