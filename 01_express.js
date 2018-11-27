/**
 * express demo
 * 
 * * */
let express = require( 'express' );
let app = express();
app.get('/hello.txt',(req, res)=>{
    res.send('Hello World');

});
let server=app.listen(3000,()=>{
    console.log('server is running on localhost://3001');
});