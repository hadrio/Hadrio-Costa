module.exports = {
    client : "mysql",
    connection: {
        database: "inventario",
        user:"root",
        password:"root",
        port:3307,
    },
    pool:{
        min:2,
        max:10
    }
}