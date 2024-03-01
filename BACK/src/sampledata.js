const sampleData1 = {
    name: "Project One",
    category: "arch",
    properties: [{
        active: true,
        client: "Tech Solutions Inc.",
        team: [{
            name: "Alice Smith",
            role: "Project Manager",
            contact: "alice@example.com"
        }, {
            name: "Bob Johnson",
            role: "Developer",
            contact: "bob@example.com"
        }]
    }],
    media: {
        img: [{
            reference: "project1_img1.jpg",
            description: "Project 1 Image 1 Description",
            name: "Project 1 Image 1"
        }],
        video: [{
            reference: "project1_video1.mp4",
            description: "Project 1 Video 1 Description",
            name: "Project 1 Video 1"
        }]
    },
    descriptions: [{
        description: "Project One Description",
        name: "Project One Description"
    }],
    projectsDates: [{
        landMark: "Project Start",
        date: new Date("2023-01-01")
    }],
    roles: [{
        description: "Project Manager",
        dates: {
            start: new Date("2023-01-01"),
            end: new Date("2023-06-30")
        },
        name: "Alice Smith"
    }],
    entryAuthor: {
        name: "John Doe"
    }
};


const sampleData2 = {
    name: "Project Two",
    category: "Marketing Campaign",
    properties: [{
        active: true,
        client: "Marketing Solutions LLC",
        team: [{
            name: "Emma Brown",
            role: "Marketing Manager",
            contact: "emma@example.com"
        }]
    }],
    media: {
        img: [{
            reference: "project2_img1.jpg",
            description: "Project 2 Image 1 Description",
            name: "Project 2 Image 1"
        }],
        video: []
    },
    descriptions: [{
        description: "Project Two Description",
        name: "Project Two Description"
    }],
    projectsDates: [{
        landMark: "Project Start",
        date: new Date("2023-03-15")
    }],
    roles: [{
        description: "Marketing Manager",
        dates: {
            start: new Date("2023-03-15"),
            end: new Date("2023-08-30")
        },
        name: "Emma Brown"
    }],
    entryAuthor: {
        name: "Jane Smith"
    }
};


const sampleData3 = {
    name: "Project Three",
    category: "Product Design",
    properties: [{
        active: true,
        client: "Design Innovations Ltd.",
        team: [{
            name: "David Wilson",
            role: "Lead Designer",
            contact: "david@example.com"
        }]
    }],
    media: {
        img: [],
        video: [{
            reference: "project3_video1.mp4",
            description: "Project 3 Video 1 Description",
            name: "Project 3 Video 1"
        }]
    },
    descriptions: [{
        description: "Project Three Description",
        name: "Project Three Description"
    }],
    projectsDates: [{
        landMark: "Project Start",
        date: new Date("2023-05-10")
    }],
    roles: [{
        description: "Lead Designer",
        dates: {
            start: new Date("2023-05-10"),
            end: new Date("2023-12-31")
        },
        name: "David Wilson"
    }],
    entryAuthor: {
        name: "Michael Johnson"
    }
};


module.exports = {
    sampleData1,
    sampleData2,
    sampleData3,

 }