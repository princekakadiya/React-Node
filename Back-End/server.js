const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const path = require("path");
const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));
const nodemailer = require("nodemailer");
const port = 5000;

import { productRoute } from "./routes";
app.use(productRoute);

app.post("/users", async (req, res) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "pipaliyaprashant602@gmail.com",
            pass: "yyfcnuqsjxoczddg",
        },
    });

    var mailOptions = {
        from: "pipaliyaprashant602@gmail.com", // sender address
        to: req.body.email, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.message,
        html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.message}</li>
        </ul>
        `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json({ status: true, respMesg: "Error" });
        } else {
            res.json({ status: true, respMesg: "Email Sent Successfully" });
        }
    });
});

app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
