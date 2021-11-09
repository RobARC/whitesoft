const express = require('express')
const router = express.Router();
const cors = require('cors');

//import connection to DB
const pool = require('../database');

router.route('/')
    .get((req, res) => {
        res.json({
            'ok': true
        })
    })
    .post(async (req, res) => {
        const { nombre, pais } = req.body;
        const newOrder = {
            nombre: nombre,
            pais: pais
        };
        await pool.query('INSERT INTO nombre_pais set ?', [newOrder]);
        //console.log(req.body);
    });

module.exports = router;