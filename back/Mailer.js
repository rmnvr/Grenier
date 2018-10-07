const express = require("express");
const router = express.Router();

const sgMail = require("@sendgrid/mail");

const sqliteManager = require("./sqlite.js");

let checkedData;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/register", async function(req, res) {
  try {
    checkedData = await sqliteManager.checkData(req.body.mail);
    let myDb = await sqliteManager.getDatabase("./myDb.sqlite3");

    let createTableQuery = `CREATE TABLE IF NOT EXISTS email_adresses (
    adresses TEXT NOT NULL)`;
    await myDb.createTable(createTableQuery);

    let existingEntryQuery = `SELECT adresses FROM email_adresses WHERE adresses='${checkedData}';`;

    let isDouble = await myDb.select(existingEntryQuery);
    if (isDouble.length !== 0) {
      throw "Already existing entry";
    }

    let insertQuery = `INSERT INTO email_adresses VALUES(
      '${checkedData}'
    )`;
    await myDb.insert(insertQuery);

    res.json("New user registered");
  } catch (err) {
    res.status(500).json(err);
  }
});

//
// ( async function() {
//   let myDb = await sqliteManager.getDatabase( "./mySqliteDb.sqlite3" );

const msg = {
  to: "rvaur@hotmail.com",
  from: "Le_grenier_de_Ben@example.com",
  subject: "Premier mail automatique depuis votre site !!",
  text:
    "Hello les amis, un petit coucou de votre site qui vous envoie son premier mail automatique :) Romain",
  html:
    "<strong>Hello les amis,</strong><br/>un petit coucou de votre site qui vous envoie son premier mail automatique :)<br/>Romain"
};
// sgMail.send(msg);

module.exports = router;
