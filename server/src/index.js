import express from 'express';
import "dotenv/config";
import authRoutes from './routes/authRoutes';

const app = new express();

app.get('/', (req, res) => { 
    res.send('welcome to the server!')
})

app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => { 
    console.log(`server is listening at port ${process.env.PORT}...`)
})