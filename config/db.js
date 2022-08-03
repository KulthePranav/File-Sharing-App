require('dotenv').config();
const mongoose= require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology: true});
    const connection= mongoose.connection;
    
    connection.once('open', ()=>{
        console.log('Database connected.');
    });

    connection.on('error',console.error.bind(console,'connection failed.'));
    
}
<<<<<<< HEAD
module.exports= connectDB;
=======
module.exports= connectDB;
>>>>>>> 4d5e7ef812f2e57d2f52329328a398d1d4be0ebe
