var crypto = require('crypto');
var jwt = require('jsonwebtoken');

crypto.randomBytes(256, function(ex, buf) {
  if (ex) throw ex;
  var token = jwt.sign({foo: 'bar'}, buf);
  var decoded = jwt.verify(token, buf);
});

