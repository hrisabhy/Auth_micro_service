const path = require("path");
const bcrypt = require("bcryptjs");

require('dotenv').config({path: path.resolve(__dirname, "../../.env")})

module.exports = {
    PORT: process.env.PORT,
    SALT: bcrypt.genSaltSync(10),
    JWT_KEY: process.env.JWT_KEY    
}