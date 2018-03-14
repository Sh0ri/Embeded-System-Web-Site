var MongoClient = require('mongodb').MongoClient

var state = {
  db: null,
  truedb:null,
}

exports.connect = function(url, done) {
  if (state.db) return done()

    MongoClient.connect(url, function(err, db) {
      if (err) return done(err)
        state.db = db
        state.truedb = db.db('OTTAWA');
      done()
    })
}



exports.get = function() {
  return state.db
}

exports.get_truedb = function(done) {
  return state.truedb
}

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}