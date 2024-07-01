const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');

const {PORT} = require("./config/serverConfig");
const {User} = require("./models/index");
const ApiRouter = require("./routes/index");

const app = express();

const prepareAndStartServer = () => {    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    app.use('/api', ApiRouter);
    
    app.listen(PORT, async () => {
        const user = await User.findByPk(2);
        const incomingPw = 'ilovepavvu'
        const response = bcrypt.compareSync(incomingPw, user.password)
        console.log(response)
        console.log(`Server started at ${PORT}`);
    })
}

prepareAndStartServer();