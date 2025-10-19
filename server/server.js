import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 3000;


//Middleware
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=> res.send('Server is Started'))
app.listen(port, ()=> console.log(`Server Listning at http://localhost:${port}`));