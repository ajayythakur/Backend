const express=require('express');
const AluminiStoriesAPI= require('../AluminiStoryAPI')
const aluminiStory=express.Router();

aluminiStory.route('/alumini_stories').get(AluminiStoriesAPI.apiController);
module.exports=aluminiStory