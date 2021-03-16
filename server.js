var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.get("/video",(req, res)=>res.redirect('https://www.youtube.com/watch?v=yXS8iNKqsCM&ab_channel=RLFComps'));

app.get('/about/team_photo', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/images/team.jpg'));
});
/*app.use((req, res,next)=>{
    res.status(404).sendFile(path.join(__dirname + '/public/error.html'));
 });*/


app.listen(3000);