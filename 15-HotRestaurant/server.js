var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 6969;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [];

const waitlist = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "./tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
    var result = {
        "data" : tables
    };
    res.json(result);
});

app.get("/api/waitlist", function(req, res) {
    var result = {
        "data" : waitlist
    };
    res.json(result);
});

app.post("/reserve", function(req, res) {
    var reservation = req.body;
    console.log("reservation", reservation);
    if (tables.length < 5) {
        tables.push(reservation);
    }
    else {
        waitlist.push(reservation);
    }
    console.log("tables", tables);
    console.log("waitlist", waitlist);
    res.json(tables);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

