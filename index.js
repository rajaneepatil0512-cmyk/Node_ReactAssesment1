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
  const courses = [
  { id: 1, name: "MERN Stack", duration: "6 Months", fees: 25000 },
  { id: 2, name: "Python Full Stack", duration: "5 Months", fees: 20000 },
  { id: 3, name: "Java Development", duration: "4 Months", fees: 18000 }
];
    const obj = {courses:courses};
  res.render("courses.ejs",obj);
});

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
