const mongoose = require('mongoose');
const Anime = require('./Anime');
const apiUrl = "https://anime-api.deno.dev/anime/v1/master/2023/2";
mongoose.connect('mongodb://localhost:27017/AnimeChalender',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=>{
    console.log('mongo opened')
})
.catch((err)=> {
    console.log(err)
})

const fetchAndSaveAnime = async () => {
    try {
        const response = await fetch(apiUrl);
        const animeData = await response.json();

        // データをスキーマに合わせて保存
        const animeDocs = animeData.map(item => ({
            title: item.title || 'Unknown',
            score: item.score || null,
            description: item.description || 'No description available'
        }));

        // MongoDBに保存
        await Anime.insertMany(animeDocs);
        console.log('Data successfully saved to MongoDB!');
    } catch (err) {
        console.error('Error fetching or saving data:', err);
    }
};

fetchAndSaveAnime()
