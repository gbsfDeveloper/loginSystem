const express = require('express');
const server = express();
let db = require('./db.js');
const bodyParser = require('body-parser');

// settings
server.set('port','4000');

// middleware 
// bodyparser options
server.use(bodyParser.urlencoded({ extended: true })); 
server.use(bodyParser.json());
server.use(bodyParser.text());
server.use(bodyParser.raw());

// Routes
server.get("/",(req,res) => {
    res.send("<h1>HOME PAGE</h1>");
});

server.post("/login",(req,res) => {
    let user = req.body.user;
    let password = req.body.password;
    console.log(req.body); 
    let conn = db.startConnection();
    conn.query({
        sql:`SELECT * FROM login WHERE user_name = ? AND user_password= ?`,
        values: [user, password]
    }, function (error, results, fields) {
        // if(error){throw error};
        if(typeof(results[0]) !== 'undefined'){
            let response = JSON.stringify(results[0]);
            res.send(`${response}`);
        }
        else{
            let response = JSON.stringify({error:true, message:"no user founded"});
            res.send(`${response}`);
        }
    });
});

const port = server.get('port');
server.listen(port,() => {
    console.log(`Listen on port ${port}`);
});