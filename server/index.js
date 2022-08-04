const express = require ("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');



// Работа с таблицами

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '12345',
    database: 'carapp'
})

app.use(cors())

app.use(express.json());

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