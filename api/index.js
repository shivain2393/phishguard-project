import express from 'express';
import cors from 'cors';
import urlRouter from './routes/route.js'

const corsOptions = {
    origin: 'http://localhost:5173',
    methods : ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}


const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/url', urlRouter);

app.listen(3000, () => {
    console.log('Server is running at port 3000')
})
