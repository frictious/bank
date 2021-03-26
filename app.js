const   express                 = require("express");

//Requiring dotenv
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>WELCOME TO MY BANKING APP</h1>");
});

app.listen(process.env.PORT, () => {
    console.log(`SERVER STARTED ON PORT: ${process.env.PORT}`);
})
