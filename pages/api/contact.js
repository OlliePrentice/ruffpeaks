// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
export default async function (req, res) {
    require('dotenv').config();
    require("es6-promise").polyfill();
    require("isomorphic-fetch");

    const {name, email, phone, service, message, captchaKey} = req.body;

    const RECAPTCHA_SERVER_KEY = process.env.RECAPTCHA_SECRET_KEY

    const humanKey = captchaKey

    // Validate Human
    const isHuman = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "post",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    },
    body: `secret=${RECAPTCHA_SERVER_KEY}&response=${humanKey}`
    })
    .then(res => res.json())
    .then(json => json.success)
    .catch(err => {
        throw new Error(`Error in Google Siteverify API. ${err.message}`)
    })

    if (humanKey === null || !isHuman) {
        throw new Error(`YOU ARE NOT A HUMAN.`)
    }

    // The code below will run only after the reCAPTCHA is succesfully validated.
    console.log("SUCCESS!")


    const sgMail = require('@sendgrid/mail');



    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: 'osprentice@gmail.com', // Change to your recipient
    from: 'osprentice@gmail.com', // Change to your verified sender
    subject: `New message from ${name} - ${email} ${service && 'about ' + service}`,
    text: 'and easy to do anywhere, even with Node.js',
    html: message + `<br /><br />Contact details:<br />Name: ${name}<br />Email: ${email}<br />Phone: ${phone}`,
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })

    res.send(200)
}