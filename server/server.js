const express = require('express')
const path = require('path')
const bodyParser = require("body-parser");
const port = 8000
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

function validateRegForm(payload) {
  let isError = false;
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    message = 'Please enter the password';
  }

  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
    isFormValid = false;
    message = 'Please enter the username';
  }

  if (!isFormValid) {
    isError = true;
  }

  return {
    success: isFormValid,
    message: message,
    isError:isError
  };
}

function validateLoginForm(payload) {
  let isError = false;
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    message = "Please enter the password";
  }

  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
    isFormValid = false;
    message = "Please enter the username";
  }

  if (!isFormValid) {
    isError = true;
  }

  return {
    success: isFormValid,
    message:message ,
    isError:isError
  };
}

app.post('/register', (req, res) => {
  const validationResult = validateRegForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      isError: validationResult.isError
    });
  }

  return res.status(200).end();
});

app.post('/login', (req, response) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
	  console.log(validationResult);
	  return response.status(400).json(validationResult);
  }

  return response.status(200).end();
});

app.get('/userDetails', function(req, res){
    console.log("server")
    var userDetails = [
        {
            "username":"aaa",
            "password":"1234567"
        },{
            "username":"bbb",
            "password":"23423432"
        },{
            "username":"cccc",
            "password":"78768678"
        }];
        res.json(userDetails);
});

app.listen(port)
console.log("server started on port " + port)



