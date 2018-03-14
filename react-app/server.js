var express = require('express')
, app = express()

const pSettle = require('p-settle');
const promisify = require('pify');

const port = process.env.PORT || 5000;
var db = require('./db')

// Connect to Mongo on start
db.connect('mongodb://localhost:27017/EmbededSystem', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(port, function() {
    	console.log("Connected to the db server")
      console.log('Listening on port 3000...')
    })


    //API CALLS
    //BASIC
    app.get('/api/get_data', (req, res) => {
      console.log("get_data");
      get_all_data(db,res);


    });
    async function get_all_data(db,res){
      const test = await get_all_data_funct(db);
      console.log(test);
      res.send(test);
    }
    function get_all_data_funct(db){
      return new Promise((resolve, reject) => {
        const truedb = db.get_truedb();
        var collec = truedb.collection('data');

        var obj = collec.find({}).toArray(function(err, result){
          if (err) throw err;
          console.log(result);
          resolve(result);
        });
      });
    }



  }
})


