const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {origin: ["http://localhost:5173"]}

app.use(cors(corsOptions));

app.get('/', (req, res)=> {
    
    
})

app.listen(3001, ()=> {
    console.log('hello')
})