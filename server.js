<<<<<<< HEAD
const express = require('express');
const app =express();
const PORT = process.env.PORT || 8080;
const connectDB=require('./config/db');
const path= require('path');
app.use(express.static('public'));
app.use(express.json());
connectDB();

//Template Engine
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

//Routes
app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'))
app.use('/files/download',require('./routes/download'));

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
=======
const express = require('express');
const app =express();
const PORT = process.env.PORT || 8080;
const connectDB=require('./config/db');
connectDB();
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
>>>>>>> 4d5e7ef812f2e57d2f52329328a398d1d4be0ebe
})