var express = require("express");
var jshint = require("jshint");

var app = express();

var movies =[
  {
    moviename : 'jai lava kusa',
    hero : 'NTR',
    director : 'Bobby'
  },
  {
    moviename : 'Spyder',
    hero : 'MaheshBabu',
    director : 'Murugudass'
  },
  {
    moviename : 'Mahanubhavudu',
    hero : 'Sharwanand',
    director : 'Maruthi'
  }
];
app.use(express.static("public"));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.get('/hiu',function(req,res,next){
  res.json(movies);

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
