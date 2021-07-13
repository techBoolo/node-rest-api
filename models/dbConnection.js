const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

(() => {
  console.log(`connecting to db...`)

  mongoose.connect(url, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`connected to db ${url}`))
  .catch(error => console.log(error.name, ': ', error.message));
})()

