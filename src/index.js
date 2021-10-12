var app = require('./app');

app.listen(app.set('port'))

console.log('server on port: ', app.get('port'))