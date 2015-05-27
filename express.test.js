var superagent = require('superagent')
var expect     = require('expect.js')

describe('express rest api server', function(){
  var id

  it('post s an object', function(done){
    superagent.post('http://localhost:3000/collections/test')
      .send({name: 'John', email: 'john@rpjs.co'})
      .end(function(e, res){
        cons
      })
  })
})
