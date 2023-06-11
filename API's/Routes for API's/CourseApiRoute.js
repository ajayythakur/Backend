const express=require('express');
const courseAPI=require('../CourseAPI');

const course=express.Router();
course.route('/course').get(courseAPI.apiController);

module.exports = course