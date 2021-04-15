const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.lvkji.mongodb.net/note-app?retryWrites=true&w=majority`
  
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)
/*
const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})

const second = new Note({
    content: 'Easy you say?',
    date: new Date(),
    important: true,
})

const third = new Note({
    content: 'Yeah!',
    date: new Date(),
    important: true,
})

const forth = new Note({
    content: 'Yeah right you mean...',
    date: new Date(),
    important: true,
})

note.save()
second.save()
third.save()
forth.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})
*/
Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})