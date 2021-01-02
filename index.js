const express = require("express");
const app = express();
app.use(express.static("public"));

const listener = app.listen(process.env.PORT, () => 
{
    console.log("Your app is listening on port " + listener.address().port);
});

app.get
(
    "/", (request, response) => 
    {
        let vHTML = mHTMLHeader("Canvas");
        vHTML = vHTML + mHTMLFooter();
        response.send(vHTML);
    }
);

function mHTMLHeader(pTitle) 
{
    var vHTML =
    "<!DOCTYPE html>" +
    "<html id='html'>" +
    "<head>" +
    "<meta charset='utf-8'>" +
    "<title>"+ 
        pTitle +
    "</title>" +
    "</head>" +
    "<body>"+
    "<canvas id='canvas'></canvas>"+
    "<script src='./Load.js'></script>";
    return vHTML;
}

function mHTMLFooter() 
{
    var vHTML = "</body></html>";
    return vHTML;
}