const express = require('express');
const router = express.Router();
const Project = require('./project.model'); 

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });
    res.json(projects); 
  } catch (error) {
    res.status(500).json({ message: 'Serer eroror'});
  }
});
module.exports = router;