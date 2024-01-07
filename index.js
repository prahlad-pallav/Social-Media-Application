const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./dbConnect');
const authRouter = require('./routers/authRouter');
const postsRouter = require("./routers/postsRouter");
const morgan = require('morgan');

dotenv.config('./.env');



const app = express();

// middlewares
// morgan -> middlewares -> tell us which api, we hit recently -> console.log()

app.use(express.json());
app.use(morgan('common'));

// middleware -> check user or not


const PORT = process.env.PORT || 4001;


app.use('/auth', authRouter);
app.use('/posts', postsRouter);
app.get('/', (req, res)=>{
    res.status(200).send("Message from server: okay!");
})


dbConnect();
app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`);
});

