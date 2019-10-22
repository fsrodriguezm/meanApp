const mongoose = require('mongoose');

//Create objext schema
var Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
});

//Export employee
module.exports = { Employee } ;