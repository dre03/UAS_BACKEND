// import mysql 
const mysql = require('mysql');
// import dotenv dan menjalankan method config
require('dotenv').config();
// membuat koneksi database menggunakan method createConnection
// method menerima parameter object : HTMLOListElement, user, password, database 

// destructing object process .env
const {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE
} = process.env;


const db = mysql.createConnection({
    host : DB_HOST,
    user : DB_USERNAME,
    password : DB_PASSWORD,
    database : DB_DATABASE,
});
/**
 * menghubungkan ke database menggunkan method  connect.
 * menerima paramaeter callback
 */
db.connect((err) =>{
    if(err){
        console.log("Error connecting" + err.stack);
        return;
    }else{
        console.log("Connected to database");
        return;
    }
});
// export db 
module.exports = db;