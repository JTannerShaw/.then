const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const { environemnt } = require('./config');
const isProduction = environemnt === 'production';

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
if (!isProduction) app.use(cors());
app.use(helmet({contentSecurityPolicy: false }))
app.use(csurf({cookie: {secure: isProduction, sameSite: isProduction && 'Lax', httpOnly: true},}));
