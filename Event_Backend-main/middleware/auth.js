const jwt = require('jsonwebtoken');

require('dotenv').config()

exports.isAuthenticatedUser = async (req, res, next) => {

    if (!req.headers.authorization) {

        return res.status(401).send("Access denied.Please login");

    }

    const token = req.headers.authorization.split(' ')[1]

    console.log(token);

    if (token === 'null') {

        return res.status(401).send("Access denied.Please login");

    }
    const userdata = jwt.verify(token, process.env.ACCESS_TOKEN)

    if (!userdata) {

        console.log("JWTTTT");
        return res.status(401).send("Access denied.Please login");
    }


    next()

}