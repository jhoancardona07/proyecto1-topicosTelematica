const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt  = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation');



// Register
router.post('/register', async (req, res) => {
    
    // Validation of the Data
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Checking if the User is already in the DB
    const emailExist = await User.findOne({ email: req.body.email });
    if(emailExist) return res.status(400).send('Email already exists');

    // Hash the Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    // Create a new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try{
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

// Login
router.post('/login', async(req, res) => {
    // Validation of the Data
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Checking if the email exist
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send('Email is not found');

    // Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid Password');

    // Create and assign the JWT Token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

router.get('/', (req, res) => {
    res.send('We are on api home');
});

module.exports = router;