// import model Patient 
const Patient = require("../models/Patient");
// membuat class PatientController 
class PatientController{
    // method index
    async index(req, res){
        // memanggil method static all with async await
        const patients = await Patient.all()
        // if the data is more than 0
        if(patients){
            const data = {
                message : 'Get All Resource',
                data : patients,
            };
            // response status code 200 and json data
            res.status(200).json(data);
        }else{
            const data = {
                message : `Data is empty`
            }
            // response status code 200 and json data
            return res.status(200).json(data)
        }
    }
    // method store
    async store(req, res){
        // validate date
        // handle If one of the data is not sent
        // get method create dari Model Patient

        // destruting object req.body
        const {name,phone,address,status,in_date_at} = req.body;
        // If the data is undefined then send an error response
        if(!name || !phone || !address || !status || !in_date_at){
            const data = {
                message : `All fields must be filled correctly`,
            }
            // response status code 422 and json data
            res.status(422).json(data);
        }
            const patient = await Patient.create(req.body);
        const data = {
            message : 'Resource is added successfully',
            data : patient
        };
        // response status code 201 and json data
         res.status(201).json(data);
    }
    // method update 
    async update(req, res){
        const {id} = req.params;
        // look for the patient id you want to update
        const patient = await Patient.find(id)
        if(patient){
            // update data
            const patient = await Patient.update(id, req.body);
            const data = {
                message : `Resource is update successfully`,
                data : patient,
            };
            // response status code 200 and json data
            res.status(200).json(data);
        }else{
            const data = {
                message : `Resource not found`,
            };
            // response status code 404 and json data
            res.status(404).json(data)
        }
    }
    // method destroy
    async destroy(req, res){
        const {id} =req.params;
        const patient = await Patient.find(id);
        if(patient){
            await Patient.delete(id);
            const data = {
                message : `Resource is delete successfully`,
            }
            // response status code 200 and json data
            res.status(200).json(data);
        }else{
            const data = {
                message : `Resource not found`,
            }
            // response status code 404 and json data
            res.status(404).json(data)
        }
    }
    // method show
    async show(req, res){
        const {id} = req.params;
        // search patient by id
        const patient = await Patient.find(id);
        if(patient){
            const data = {
                message : `Get Detail Resource`,
                data : patient,
            }
            // response status code 200 and json data
            res.status(200).json(data);
        }else{
            const data = {
                message : `Resource not found`,
            }
            // response status code 404 and json data
            res.status(404).json(data);
        }
    }
    // method search name 
    async search(req, res) {
        const { name } = req.params;
        const patient = await Patient.search(name);
        // if data by name exists then display it
        if (patient) {
            const data = {
                message: "Get searched resource",
                data: patient
            };
            // response status code 200 and json data
            res.status(200).json(data);
        } else {
            const data = {
                message: "Resource not found",
            };
            // response status code 404 and json data
            res.status(404).json(data);
        }
    }
    // method check positive data
    async positive(req, res) {
        const patient = await Patient.findByStatus('positive');
        const total = patient.length;
        if(patient) {
            const data = {
                message: "Get positive resource",
                total: total,
                data: patient,
            };
            // response status code 404 and json data
            res.status(200).json(data);
        }else{
            const data = {
                message: "Resource not found",
            };
            // response status code 404 and json data
            res.status(404).json(data);
        }
    }
    // method check recovered data
    async recovered(req, res) {
        const patient = await Patient.findByStatus('recovered');
        const total = patient.length;
        if (patient) {
            const data = {
                message: "Get recovered resource",
                total: total,
                data: patient,
            };
            // response status code 200 and json data
            res.status(200).json(data);
        
        }else{
            const data = {
                message: "Resource not found",
            };
            // response status code 404 and json data
            res.status(404).json(data);
        }
    }

    // method check dead data
    async dead(req, res) {
        const patient = await Patient.findByStatus('dead');
        const total = patient.length;
        if (patient) {
            const data = {
                message: "Get dead resource",
                total: total,
                data: patient,
            };

            // response status code 200 and json data
            res.status(200).json(data);
        
        }else{
            const data = {
                message: "Resource not found",
            };

            // response status code 404 and json data
            res.status(404).json(data);
        }
    }

}
    // membuat object PatienstController
    const object = new PatientController();
    // export object PatientController 
    module.exports = object;