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
    const num=4
    res.render('frontpage');
});

app.get("/uploaded",(req,res)=>{
    res.render('uploaded')
})

app.post("/uploaded",(req,res)=>{
    res.redirect('/uploaded')
})

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})