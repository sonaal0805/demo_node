import express from 'express';

const app = express();
const PORT  = 3001;

app.use('/test',(req, res)=>{
    res.status(200).json("all good!")
})

app.listen(PORT,()=>{
    console.log("listening to port ",PORT,'...');
})
