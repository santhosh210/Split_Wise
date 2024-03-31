// routes.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const mongoFunction = require('../helpers/mongoFunctions');

// Create a user
router.post('/users', async (req, res) => {
    try {
        const newUser = await mongoFunction.create(User, req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await mongoFunction.find(User);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a user by ID
router.get('/users/:id', async (req, res) => {
    try {
        const user = await mongoFunction.findOne(User, { _id: req.params.id });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a user
router.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await mongoFunction.updateOne(User, { _id: req.params.id }, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
    try {
        await mongoFunction.deleteOne(User, { _id: req.params.id });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
