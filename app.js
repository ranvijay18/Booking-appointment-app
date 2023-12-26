const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const sequelize = require('./util/database')

const userRouter = require('./route/user');


// app.use(userRouter);
app.use(cors());
app.use(express.json());



app.use(userRouter);



sequelize.sync()
.then(() => {
    app.listen(5000);
})
.catch(err => {
    console.error(err);
})
