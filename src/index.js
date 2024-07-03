const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require("./config/serverConfig");
const ApiRouter = require("./routes/index");

const UserService = require("./services/user-service");

const app = express();

const prepareAndStartServer = () => {    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    app.use('/api', ApiRouter);
    
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        const service = new UserService();
        // const newToken = service.createToken({email: "hrisabhyadav31@gmail.com", id: 1});
        // console.log("New token: ", newToken)

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhyaXNhYmh5YWRhdjMxQGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE3MTk5ODA5OTcsImV4cCI6MTcxOTk4NDU5N30.bwe22OUfuFnz5xtVZKZgXC5yJfG-0s0hHUeseeKoEYc"
        const response = service.verifyToken(token);
        console.log(response)
    })
}

prepareAndStartServer();