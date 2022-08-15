const express = require ("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");



// Работа с таблицами

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '12345',
    database: 'carapp'
})

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}))

app.use(express.json());


app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24*1000,
        },
    })
);

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }

        db.query(
            "INSERT INTO managers (username, password) VALUES (?,?)",
            [username, hash],
            (err, result) => {
                console.log(err);
            }
        );
    });
});

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM managers WHERE username = ?;",
        username,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result);
                    } else {
                        res.send({ message: "Wrong username/password combination!" });
                    }
                });
            } else {
                res.send({ message: "User doesn't exist" });
            }
        }
    );
});

app.post('/create',(req,res)=>{

    const work1 = req.body.work1;
    const work2 = req.body.work2;
    const work3 = req.body.work3;
    const work4 = req.body.work4;
    const work5 = req.body.work5;
    const work6 = req.body.work6;
    const work7 = req.body.work7;
    const name = req.body.name;
    const number = req.body.number;
    const car = req.body.car;
    const carNumber = req.body.carNumber;
    const wheels = req.body.wheels;
    const tires = req.body.tires;
    const time1 = req.body.time1;
    const time2 = req.body.time2;
    const time3 = req.body.time3;
    const time4 = req.body.time4;
    const time5 = req.body.time5;
    const radius = req.body.radius;


    db.query('INSERT INTO data (work1,work2,work3,work4,work5,work6,work7,name,number,car,carNumber,wheels,tires,time1,time2,time3,time4,time5,radius) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [work1,work2,work3,work4,work5,work6,work7,name,number,car,carNumber,wheels,tires,time1,time2,time3,time4,time5,radius],
        (err, result) => {

            if (err) {
                console.log(err)
            } else {
                res.send ("Values Inserted")
            }

    })

})


app.get('/employees',(req,res) =>{
    db.query("SELECT * FROM data",(err, result) => {
        if (err){
            console.log (err);
        } else {
            res.send(result);
        };
    });
});



app.listen(3001,()=>{
    console.log("check");
});