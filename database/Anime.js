const mongoose = require('mongoose');
// https://anime-api.deno.dev/anime/v1/master/2023/2
const Schema = mongoose.Schema;

const AnimeDataSchema = new Schema({
    title: String, 
})

const Anime = mongoose.model('Anime', AnimeDataSchema);
module.exports = Anime