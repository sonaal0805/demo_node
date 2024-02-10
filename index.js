import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import { add } from './calculator.js'

const app = express();
const PORT  = 3001;

app.use('/test',(req, res)=>{
    res.status(200).json("all good!")
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const filename = fileURLToPath(import.meta.url);

const dirname = path.dirname(filename);



app.get('*', (req, res)=>{
    res.sendFile(path.join(dirname,'index.html'));
})

app.use("/calculate", (req, res)=>{
    const result = add(req.body.numbers);
    res.status(200).json(result)
})

app.listen(PORT,()=>{
    console.log("listening to port ",PORT,'...');
})
