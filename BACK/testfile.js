const {createProjectInstance} = require('../API/src/dataBase/funtions.js')


const sampleData = {
    name: "Project Name",
    category: "Sample Category",
    properties: [{
        active: true,
        client: "Sample Client",
        team: [{
            name: "John Doe",
            role: "Developer",
            contact: "john@example.com"
        }]
    }],
    media: {
        img: [{
            reference: "img1.jpg",
            description: "Image Description",
            name: "Image Name"
        }],
        video: [{
            reference: "video1.mp4",
            description: "Video Description",
            name: "Video Name"
        }]
    },
    descriptions: [{
        description: "Project Description",
        name: "Description Name"
    }],
    projectsDates: [{
        landMark: "Project Start",
        date: new Date()
    }],
    roles: [{
        description: "Role Description",
        dates: {
            start: new Date(),
            end: new Date()
        },
        name: "Role Name"
    }],
    entryAuthor: {
        name: "Author Name" // Assuming name is required
    }
};


createProjectInstance(sampleData ) 