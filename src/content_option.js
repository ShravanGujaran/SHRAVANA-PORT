import sImage from './assets/images/d.jpeg'; // Adjust the path as necessary
import DImage from './assets/images/s.jpg'
import fImage from './assets/images/f.jpg'
const logotext = "SHRAVANA S SALIAN";

const meta = {
    title: "SHRAVANA",
    description: "I’m SHRAVANA Web Developer _ Full stack developer, MCA Graduate",
};

const introdata = {
    title: "I’m SHRAVANA ",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop react apps",
    },
    description: " Looking for an entry-level job in an IT business where I can use my practical experience and academic knowledge to successfully contribute to projects. Eager to pick up knowledge from seasoned experts, improve my technical abilities, and actively contribute to the creation of novel solutions that meet the changing demands of the sectors",
    your_img_url: sImage, // Use the imported image here
};

const dataabout = {
    title: "About Myself",
    aboutme: "MCA Graduate with Proficiency in Web Development and a Strong Foundation in Software Engineering Principles",
};

const Education = [
    {
        Course: "MCA",
        where: "NMAM Institute Of Technology",
        YOP: "2024",
        CGPA:"8.16"
    },
    {
        Course: "BCA",
        where: "SBC Karkala",
        YOP: "2022",
        CGPA:"8.86"
    },
   
];

const skills = [
    {
        name: "Python",
        value: 90,
    },
    {
        name: "Django",
        value: 85,
    },
    {
        name: "JavaScript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "SQL",
        value: 85,
    },
];

const experience = [
    {
        title: "Accolade Tech Solutions - Full stack developer",
        description: "Led development of AgroMart, a full-stack application using React for the frontend, Node.js and Express for thebackend, and MySQL for database management, enabling seamless integration and efficient data handling foragricultural product management..Implemented RESTful APIs to facilitate smooth data communication between the frontend and backend, ensuringoptimal user experience and data integrity in AgroMart.",
    },
   
];

const dataportfolio = [
    {
        img: DImage,
        description: "Developed a CNN-based pneumonia detection system for chest X-ray analysis, enhancing diagnostic accuracy.",
       
    },
    {
        img: fImage,
        description: "Developed crime reporting, complaint registration, and criminal identification using Python OpenCV",
        
    },
    // Add more items as needed
];

const contactConfig = {
    YOUR_EMAIL: "salianshravana@gmail.com",
    YOUR_FONE: "8861812321",
   
    YOUR_SERVICE_ID: "service_skshravan",
    YOUR_TEMPLATE_ID: "template_fg5hh1j",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
   
    instagram: "https://instagram.com",
    linkedin: "https://www.linkedin.com/in/shravana-ss-329802278",
    
};

export {
    meta,
    dataabout,
    dataportfolio,
   Education,
    skills,
    experience,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
