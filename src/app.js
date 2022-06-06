const express = require('express');
const env = require('dotenv/config')

const alunoRouter = require('./alunosRouter');
const libelulaRouter = require('./routers/libelulaRouter');
const redditbr = require('./routers/redditbrRouter');
const sosmulher = require('./routers/sosMulherRouter');

const database = require('./db');

const app = express();
app.use(express.json());

app.use('/alunos', alunoRouter);


app.listen(process.env.PORT, async () => {
    const resultDb = await database.sync({force:true});
    console.log('server started');
})