const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Jhoan",
        "website": "www.google.com"
    };
    res.json(data);
});

module.exports = router;
