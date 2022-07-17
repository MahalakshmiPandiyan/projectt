const mongoose = require('mongoose');

const Login = mongoose.model('Login', {
    nameValue: { type: String },
    password: { type: String },
    role: { type: String },
    email: { type: String },
    phone: { type: String }
});

module.exports = { Login };