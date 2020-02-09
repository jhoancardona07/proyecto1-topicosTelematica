const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes & Routes Middlewares
const postRoutes = require('./routes/posts');
const authRoutes = require('./routes/auth');
const testRoutes = require('./routes/tests');
app.use('/posts', postRoutes);
app.use('/api/user', authRoutes);
app.use('/api/tests', testRoutes);

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

// Connect to DB
mongoose.connect('mongodb://localhost/apirest', { useNewUrlParser: true })
    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err));

// Start the server
app.listen(3000, () => console.log('Server Up and Running on the Port 3000'));