
const express = require('express');
const cors = require('cors');
const app =express();
const PORT = process.env.PORT || 8080;
const connectDB=require('./config/db');
const path= require('path');
app.use(express.static('public'));
app.use(express.json());
connectDB();
//Cors
const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
}
app.use(cors(corsOptions));
//Template Engine
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

//Routes
app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'))
app.use('/files/download',require('./routes/download'));

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});
