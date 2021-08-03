import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json({limit : "30mb" , extended:true }));
app.use(express.urlencoded({limit : "30mb",extended:true}));

// never in my fucking miserable life will i ever specify routes before cors


app.use(cors());
app.use('/posts',postRoutes);
const CONNECTION_URL = "mongodb+srv://jayanthgandham:jayanth123@cluster0.4zves.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true , useUnifiedTopology:true})
        .then(()=>app.listen(PORT,()=>console.log(`server running on port : ${PORT}`)))
        .catch((error)=>console.log(error));
mongoose.set('useFindAndModify', false);
// turn into model
