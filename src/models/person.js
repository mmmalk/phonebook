const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.connect(url, {useNewUrlParser: true})

const Person = mongoose.model('persons', {
  name: String,
  number: String,
  personId: Number
})

module.exports = Person