'use strict'

const fs = require('fs');

const students = fs.readFileSync('students.json', {encoding: 'utf8'});
const topics = fs.readFileSync('topics.json', {encoding: 'utf8'});

let studentsObj = JSON.parse(JSON.stringify(students));
let topicsObj = JSON.parse(JSON.stringify(topics));

console.log(studentsObj);
console.log(topicsObj);

/* class giveTopicForStudent {
    constructor (student, topic, description) {
        this.student = studentsObj.student;
        this.student = topicsObj.topic;
        this.student = topicsObj.description;
    }

    getTopic() {

    }
}


const giveTopicForStudent = new giveTopicForStudent(); */