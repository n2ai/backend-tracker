const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciceSchema = new Schema({
    username: {type:String, required: true},
    description:{type: String, required: true},
    duration:{type: Number, required:true},
    date:{type: Date, required: true}
}, {
    timestamps:true,
})


const Exercise = mongoose.model('Exercise', exerciceSchema)

module.exports = Exercise