const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRouter);

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Server linstening on port: ${port}`));