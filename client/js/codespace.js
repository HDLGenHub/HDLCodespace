//const { default: axios } = require("axios");
import axios from 'axios';

let editor;

window.onload = function(){
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/verilog");
}

function changeLanguage(){
    let language = $("#languages").val();

    if(language=="verilog")editor.session.setMode("ace/mode/verilog");
    else if(language=="vhdl")editor.session.setMode("ace/mode/vhdl");
    else if(language=="python")editor.session.setMode("ace/mode/python");
}

function execute(){
    var name = $("#languages").val();
    var description = editor.getSession().getValue();
    axios.post(`http://localhost:4000/Coding`, {
        name,
        description
    })
    $.ajax({
        url: "../../php/htdocs/HDLCodeSpace/compiler.php",
        method: "POST",
        data: {
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },
        success: function(response){
            $(".output").text(response)
        }
    })
}