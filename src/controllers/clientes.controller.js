var conection = require('../database/connerction');
var querys = require('../database/querys');
var sql = require('mssql');

exports.getCliente = async (req, res) => {
    try {
        const pool = await conection.getConnection();
        const result = await pool.request().query(querys.getCliente);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);    
        res.send(error.msg);
    }
   
}

exports.postClient = async (req, res) => {
    const {RasonSocial_C, Contactos_C, Cuil_C, ingresosBruos_C, Telefono_C, Email_C} = req.body;
    if(RasonSocial_C == null || Contactos_C == null || Email_C == null){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'});
    }

    if(Cuil_C == null) Cuil_C = 0;
    if(ingresosBruos_C == null) ingresosBruos_C = 0;
    if(Telefono_C == null) Telefono_C = 0;

    try {
        const pool = await conection.getConnection();
        await pool.request()
        .input("RasonSocial_C", sql.VarChar, RasonSocial_C)
        .input("Contactos_C", sql.VarChar, Contactos_C)
        .input("Cuil_C", sql.Int, Cuil_C)
        .input("ingresosBruos_C", sql.Int, ingresosBruos_C)
        .input("Telefono_C", sql.Int, Telefono_C)
        .input("Email_C", sql.VarChar, Email_C)
        .query(querys.postCliente);
         res.json({RasonSocial_C, Contactos_C, Cuil_C})
    } catch (error) {
        res.status(500);    
        res.send(error.msg);
    }

}

exports.getClienteByCuil = async (req, res) => {

    const { Cuil_C } = req.params;
    try {
        const pool = await conection.getConnection();
        const result = await pool.request()
        .input("Cuil_C", Cuil_C)
        .query(querys.getClienteByCuil);
       res.send(result.recordset[0])
    } catch (error) {
         res.status(500);    
        res.send(error.msg);
    }
    
}

exports.deleteClienteByCuil = async (req, res) => {

    const { Cuil_C } = req.params;
    try {
        const pool = await conection.getConnection();
        const result = await pool.request()
        .input("Cuil_C", Cuil_C)
        .query(querys.deleteClienteByCuil);
       res.sendStatus(204)
       console.log(Cuil_C)
    } catch (error) {
         res.status(500);    
        res.send(error.msg);
    }
}

exports.getTotalCliente = async (req, res) => {
    try {
        const pool = await conection.getConnection();
        const result = await pool.request().query(querys.getTotalCliente);
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);    
        res.send(error.msg);
    }
}

exports.updateClienteByCuit = async (req, res) => {
    const {RasonSocial_C, Contactos_C, Cuil_C, ingresosBruos_C, Telefono_C, Email_C} = req.body;
    const { IdCliente } = req.params;
    if(RasonSocial_C == null || Contactos_C == null || Email_C == null){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'});
    }
    try {
    const pool = await conection.getConnection();
        await pool.request()
        .input("IdCliente", sql.Int, IdCliente)
        .input("RasonSocial_C", sql.VarChar, RasonSocial_C)
        .input("Contactos_C", sql.VarChar, Contactos_C)
        .input("Cuil_C", sql.Int, Cuil_C)
        .input("ingresosBruos_C", sql.Int, ingresosBruos_C)
        .input("Telefono_C", sql.Int, Telefono_C)
        .input("Email_C", sql.VarChar, Email_C)
        .query(querys.updateClienteByCuil);
         res.json({RasonSocial_C, Contactos_C, Cuil_C})
        
    } catch (error) {
        res.status(500);    
        res.send(error.msg);
    }
}