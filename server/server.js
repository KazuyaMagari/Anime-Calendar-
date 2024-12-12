const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');
const corsOptions = {origin: ["http://localhost:5173"]}
const Anime = require('../database/Anime')
mongoose
  .connect('mongodb://localhost:27017/AnimeChalender', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(cors(corsOptions));

app.get('/', async (req, res)=> {
    const Animes = await Anime.find()
    res.json(Animes)
    
})

app.listen(3001, ()=> {
    console.log('hello')
})