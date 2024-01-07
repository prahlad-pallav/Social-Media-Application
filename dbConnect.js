const mongoose = require('mongoose');

module.exports = async() => {
    const mongoURL = 'mongodb+srv://prahladpallav147:NAOp6nbNNur3b3Os@cluster0.8mgvfdp.mongodb.net/?retryWrites=true&w=majority'
    
    try{
        const connect = await mongoose.connect(mongoURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB connected; ${connect.connection.host}`)
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }   
}