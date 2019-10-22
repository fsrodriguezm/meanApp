//loading moongose package
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/crudDB', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (!err)
        console.log('MongoDB connection succeded.');
    else
        console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2));
});

//export moongose module to be available outside of this file
module.exports = mongoose;