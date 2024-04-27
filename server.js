import express from "express";
import axios from "axios";
import multer from "multer";
import ejs from "ejs";

const app = express();
const port =3000;

const upload = multer({dest: "uploads/"});

app.use(express.static("public"));


app.get("/", function(req,res){
    res.render("index.ejs");
});



app.post("/upload", upload.single("file"), function(req,res){
    console.log(req.file);
    console.log("successful");
    res.sendStatus(200);
    
});












app.listen(port, function(){
    console.log("the server is listening to port "+ port);
})