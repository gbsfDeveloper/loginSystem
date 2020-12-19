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

server.post("/register",(req, res, next) => {
    let user = req.body.user;
    let password = req.body.password;
    let conn = db.startConnection();

    conn.query({
        sql:`INSERT INTO login (user_name, user_location, user_active, user_password) VALUES (?, ?, ?, ?)`,
        values: [user, "Mexico", 1, password]
    }, function (error, results, fields) {
        console.log("Insertado???");
    });
}

server.post("/login",(req,res) => {
    const body = JSON.parse(req.body);  
    let user = body.user;
    let password = body.password;
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