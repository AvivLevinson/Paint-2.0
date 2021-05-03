const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = require('./routes');


app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());

app.use('/', router);

const PORT = 2000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server listen on port: ${PORT}`);
})