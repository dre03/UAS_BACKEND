// imoport database
const db = require("../config/database");
// classs model Patient
class Patient{
// get all
static all(){
    return new Promise((resolve, reject) =>{
        const query = "SELECT * FROM patients";
        db.query(query, (err, results) => {
            resolve(results);
        });
    });
}
// create data
static async create(data){
    const id = await new Promise((resolve, reject) =>{
        const sql = "INSERT INTO patients SET ?";
        db.query(sql, data, (err, results) =>{
            resolve(results.insertId);
        });
    });
    const patient = this.find(id);
    return patient;
}
// find id data 
static find(id){
    return new Promise((resolve, reject) =>{
        const sql = "SELECT * FROM patients WHERE id = ?";
        db.query(sql, id, (err, results) =>{
            //destructing array
            const [patient] = results;
            resolve(patient);
        });
    });
}
// update data
static async update(id, data){
    await new Promise((resolve, reject) =>{
        const sql = "UPDATE patients SET ? WHERE id = ?";
        db.query(sql, [data, id], (err, results) =>{
            resolve(results);
        });
    });
    const patient = await this.find(id);
    return patient;
}
// delete data
static delete(id){
    return new Promise((resolve, reject) =>{
        const sql = "DELETE FROM patients WHERE id = ?";
        db.query(sql, id, (err, results) =>{
            resolve(results);
        });
    });
}
// search data name
static search(name) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM patients WHERE name LIKE '%" + name + "%'";
            db.query(sql, name, (err, results) => {
                resolve(results);
            });
        });
    }
// find by status
static async findByStatus(status) {
    // find data by positive status
    if (status == 'positive') {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM patients WHERE status = 'Positive'";
            db.query(sql, status, (err, results) => {
                resolve(results);
            });
        });
    }
    // data by recovered status
    else if (status == 'recovered') {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM patients WHERE status = 'Recovered'";
            db.query(sql, status, (err, results) => {
                resolve(results);
            });
        });
    }
    // data by dead status
    else if (status == 'dead') {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM patients WHERE status = 'dead'";
            db.query(sql, status, (err, results) => {
                resolve(results);
            });
        });
    }
}
}
// export class Patient
module.exports = Patient