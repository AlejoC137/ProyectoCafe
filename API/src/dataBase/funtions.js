const {  mongoose } = require("mongoose")
const { Project } = require('../models/projectModel.js')
const { client } =  require('./dataBase.js')

// function createProjectInstance(data ) {
//     // Validate data against the schema
//     const { error } = Project.validate(data);
//     if (error) {
//         return new Error(`Validation Error: ${error.message}`);
//     }

//     // Create an instance of the model
//     let createdEntry = new Project(data);

//     // Convert the Mongoose model instance to a plain JavaScript object
//     let entryObject = createdEntry.toObject();

//     // Connect to the MongoDB client
         
        
//     console.log(entryObject);


// }


function createProjectInstance(data) {
    // Validate data against the schema
    const { error } = Project.validate(data);
    if (error) {
        return new Error(`Validation Error: ${error.message}`);
    }

    // Create an instance of the model
    let createdEntry = new Project(data);

    // Convert the Mongoose model instance to a plain JavaScript object
    let entryObject = createdEntry.toObject();

    // Get the collection
    const collection = client.db("test").collection("projects");

    // Insert the document
    collection.insertOne(entryObject, (err, result) => {
        if (err) {
            console.error('Error inserting document:', err);
            return;
        }

        console.log('Entry created');
    });
}

// Example usage:


module.exports = {createProjectInstance}