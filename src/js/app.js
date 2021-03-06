const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRouter = require('./routers/users');
const envRouter = require('./routers/env');
const awsRouter = require('./routers/aws');


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/users', usersRouter);
app.use('/env', envRouter);
app.use('/aws', awsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
