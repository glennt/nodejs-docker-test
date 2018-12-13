const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const s3 = new aws.S3();

/**
 * Get env vars
 */
router.get('/s3', async (req, res) => {
    res.set('Content-Type', 'application/json');

    try {
        const result = await s3.getObject({
            Bucket: "nodejs.docker.test",
            Key: "s3Test.json"
        }).promise();

        console.log(result);

        res.send(result.Body.toString('utf8'));
    } catch (e) {
        res.status(500);
        res.send(e);
    }
});


module.exports = router;