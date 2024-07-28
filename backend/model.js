const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
    name: { type: String, required: true },
    picture: { type: String, required: true },
    link: { type: String, required: true }
});

const gamesSchema = new Schema({
    name: { type: String, required: true },
    games: { type: [gameSchema], required: true }
});

module.exports = mongoose.model('Games', gamesSchema);
