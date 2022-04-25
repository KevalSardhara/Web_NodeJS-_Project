const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const requests = require("requests");

const { BADHINTS } = require("dns");
const port = process.env.PORT || 8000;
const ip = "127.0.0.1";

const pathFileIndex = path.join(__dirname, "../public/index.html");
const pathFileAbout = path.join(__dirname, "../public/about.html");
const hbsPath = path.join(__dirname, "../partial-fold/views");
const templatePath = path.join(__dirname, "../partial-fold/template");



console.log(pathFileIndex);
console.log(__dirname);
app.set("view engine", "hbs");
app.set("views", hbsPath);

// hbs to registerPartials for the path to give it; 
hbs.registerPartials(templatePath);


// app.use(express.static(path.join(__dirname, "../public/index.html")));
app.use(express.static(path.join(__dirname, "../public/css")));
app.use(express.static(path.join(__dirname, "../public/img")));
app.use(express.static(path.join(__dirname, "../public/js")));
app.use(express.static(pathFileIndex));
app.use(express.static(pathFileAbout));

app.get("/", (req, res) => {
  // File data to the run on it.
  // Write the code of the ---> sendFile
    // res.sendFile(pathFileIndex);// html file to send on it
    // res.end();
    res.render("index");
});

app.get("/about/", (req, res) => {
    // File data to the run on it.
    // Write the code of the ---> sendFile
    //   res.sendFile(pathFileAbout);
      // res.end();
      console.log(req.params);
      res.render("about");
  });


// app.get("/about", (req, res) => {
//   res.send("about page");
// });
app.get("/wheater", (req, res) => {
  res.render("wheater");
});

app.get("/*", (req, res) => {
//   res.send("404 error page");

res.render("404error",{
        message : "404 Error page! page not found pleace chake it your url path",
    });

    // res.json({
    //   a : 12,
    //   b : "xcvbn",
    // })
    // console.log(JSON.parse(res.json({
    //   a : 12,
    //   b : "xcvbn",
    // })
    // ));

});

app.listen(port, ip, () => {
  console.log("server id start on the port no." + port);
});
