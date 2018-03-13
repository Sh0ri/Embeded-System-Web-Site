var express = require('express')
  , app = express()

var db = require('./db')

// Connect to Mongo on start
db.connect('mongodb://localhost:27017/OTTAWA', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(3000, function() {
    	console.log("Connected to the db server");
      console.log('Listening on port 3000...')
    })
  }
})