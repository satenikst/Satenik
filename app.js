var express = require('express');
var app = express();
app.set('PORT', (process.env.PORT||3000));
app.use(express.static('public'));
app.listen(app.get('PORT'), function(){
	console.log('listening on', app.get('PORT'));
});