const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();

console.log(process.env);

const PORT = process.env.PORT || 5000;

const user = process.env.USER;
const pass = process.env.PASS;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/contact.html');
});

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com" ,
        port: 587,
        auth: { user , pass}
    });

    const mailOptions = {
        from: user ,
        to: "contato@viniciusbsarmento.com" ,
        subject: `Contact form - Resume Vinícius - Message from ${req.body.name}` ,
        text: `Name: ${req.body.name}
               Email: ${req.body.email}
               Message: ${req.body.message}`
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if (error){
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('sucess');
        }
    })

});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});