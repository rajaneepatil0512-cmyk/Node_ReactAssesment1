const express = require("express");
const app = express();

app.use(express.static("public/"));

// routing defined
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/courses", (req, res) => {
    const course = [
        "Coursename",
        "Duration",
        "Fees",
    ];
    const obj = {course:course};
  res.render("courses.ejs",obj);
});

// app.get("/projects", (req, res) => {
//   const project = [
//     "EPCPROMAN",
//     "SPOOLMAN",
//     "MYAPP",
//     "IIFLSECURITIES",
//     "FASTRACK",
//   ];
//   const obj = { project: project };
//   res.render("projects.ejs", obj);
// });


app.get("/course_details", (req, res) => {
  res.render("course_details.ejs");
});

// fallback routing
app.use((req, res) => {
  res.render("404.ejs");
});

const PORT = 3000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
  console.log(`Server is running up...on http://${HOST}:${PORT}`);
});
