const express = require('express');
const router = express.Router();

/**
 * Get env vars
 */
router.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');

    let envVars = [
        {
            name: "TEST_VAR",
            value: process.env.TEST_VAR
        }
    ];

    res.send(envVars);
});


module.exports = router;