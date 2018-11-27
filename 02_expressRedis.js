/**
 * express demo
 * 
 * * */
let express = require( 'express' );
let redis = require('redis');
let db  = redis.createClient();

let app = express();
app.use(function(req, res, next){
    var ua = req.headers['user-agent'];
    db.zadd('online', Date.now(), ua, next);
  });

app.use(function(req, res, next){
var min = 60 * 1000;
var ago = Date.now() - min;
    db.zrevrangebyscore('online', '+inf', ago, function(err, users){
        if (err) return next(err);
        req.online = users;
        next();
    });
});
app.get('/', function(req, res){
    res.send(req.online.length + ' users online');
    console.log('server is running on localhost:3000');
    console.log(req.online);
  });
let server=app.listen(3000,()=>{
    console.log('server is running on localhost:3000');
});