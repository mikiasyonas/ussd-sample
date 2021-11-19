const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());
app.options('*', cors());

app.post('/', ((req, res) => {
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text
    } = req.body;

    let response = '';

    if(text == "") {
        response = `CON what do you like to check
            1. All info
            2. My Account
            `;
    } 
    else if(text == "1") {
        response = `END phone number = ${ phoneNumber }
                        service code = ${serviceCode}
                        session id = ${sessionId}
                        text = ${text}`;
    }
    else {
        response = `END just choose 1`;
    }
    res.set('Content-Type: text/plain');
    return res.send(response);

}));



module.exports = app;