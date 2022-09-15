const mongoose = require ('mongoose');


// Schema: Data structure of collection Articles
const Schema = new mongoose.Schema({
    id: Number,
    name: {type: String, required: true} ,
    description: String,
    days: Number
});
const Tasks = mongoose.model('Tasks', Schema);


module.exports = Tasks;
