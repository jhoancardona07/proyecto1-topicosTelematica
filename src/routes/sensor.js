const { Router } = require('express');
const router = Router();

const sensor = require('../sample.json');
console.log(sensor);

router.get('/', (req, res) => {
    res.json(sensor);
});

router.post('/', (req, res) => {
    const { user, email, temperature, humidity, gps } = req.body;
    if (user && email && temperature && humidity && gps) {
        const id = sensor.length + 1;
        const newData = {...req.body, id};
        console.log(newData);
        sensor.push(newData);
        res.json(sensor);
    } else {
        res.json({error: 'There was an error.'});
    }
});

module.exports = router;