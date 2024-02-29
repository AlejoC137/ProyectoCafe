const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: String,
    properties: [{
        active: { type: Boolean, required: true },
        client: { type: String, required: true },
        team: [{
            name: { type: String, required: true },
            role: { type: String, required: true },
            contact: String
        }]
    }],
    media: {
        img: [{
            reference: String,
            description: String,
            name: String
        }],
        video: [{
            reference: String,
            description: String,
            name: String
        }]
    },
    descriptions: [{
        description: { 
            type: String, 
            required: true },
        name: String, // Assuming name is optional
    }],
    projectsDates: [{
        landMark: String,
        date: { type: Date, required: true }
    }],
    roles: [{
        description: String,
        dates: {
            start: { type: Date, required: true },
            end: { type: Date, required: true }
        },
        name: { type: String, required: true }
    }],
    entryAuthor: { 
        name: { type: String, required: true },
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = {Project};

