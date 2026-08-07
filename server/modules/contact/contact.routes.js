const express = require('express');
const router = express.Router();
const Contact = require('./contact.model');

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = new Contact({ name, email, message });
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully' });
    }catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;