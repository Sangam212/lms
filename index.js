import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users',userRoutes);
app.get('/',(req,res)=>{
    
    console.log('AA Gaye');
    res.send('Hello Brother');
})
app.listen(PORT, () => console.log(`server is running: http://localhost:${PORT}`));
