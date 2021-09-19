const ejs = require('ejs')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/",(req,res)=>{
    res.render('frontpage');
});

app.get("/uploaded",(req,res)=>{ 
    res.render('uploaded')
})

app.get("/loading",(req,res)=>{
    res.render('loading')
})

app.post("/loading",(req,res)=>{
    res.redirect('/loading')
})

app.post("/uploaded",(req,res)=>{
    res.redirect('/uploaded')
})

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})