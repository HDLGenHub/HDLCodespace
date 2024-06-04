const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(5000, ()=>{
    alert("pass");
})