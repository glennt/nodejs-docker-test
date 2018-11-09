const express = require('express');
const router = express.Router();

/**
 * Get users
 */
router.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');

    let users = [
        {
            id: 1,
            username: 'user1'
        },
        {
            id: 2,
            username: 'user2'
        }
    ];

    res.send(users);
});


module.exports = router;