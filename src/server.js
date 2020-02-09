const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const Person = require("./models/person")

//use clauses
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(cors())


const formatPerson = (peep) => {
  return {
    name: peep.name,
    number: peep.number,
    personId: peep.personId
  }
}

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get("/api/persons", (req, res) => {
    Person
      .find({})
      .then(peeps => {
        res.json(peeps.map(formatPerson))
      })
      .catch(err => {
        console.log(err)
        Response.status(404).end
      })
})

app.get("/api/persons/:id", (req, res) => {
  const searchid = Number(req.params.id)
  //seeks out 'person'(single json index) from persons by param id
  Person
    .find({personId: searchid})
    .then(peep => {
        res.json(peep.map(formatPerson))
      })
    .catch(err => {
      console.log(err)
      Response.status(404).end
    })
  })


app.delete("/api/persons/:id", (req, res) => {
  Person
    .findOneAndDelete({personId: Number(req.params.id)})
    .then(result => {
      res.status(204).end()
    })
    .catch(err => {
      console.log(err)
      res.status(400).send({error: "bad ID"})
    })
  })

const assignID = () => {
  //get ids from json, sort it, reverse it, take the last number, add 1
  //TODO: find out a "good enuff" way to find first available id
  return Math.floor(Math.random() * 9999)
}
app.post("/api/persons", (req, res) => {

  const body = req.body
  console.log(body.content)
  
  //checks if the body contains both fields
  if(body.name === undefined || body.number === undefined){
    return res.status(400).json({error: "data not valid"})
  }

 
  const person = new Person({
    name: body.name,
    number: body.number,
    personId: assignID()
  })
  
  person 
    .save()
    .then(saved => {
      res.json(formatPerson(saved))
    })
    .catch(err => {
      console.log(err)
      Response.status(404).end
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log("Running on port: " + PORT)
})

