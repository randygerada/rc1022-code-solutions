const express = require('express');

let nextId = 1;
const grades = {};



const app = express();

app.get('/api/grades', (req, res)=> {
  const gradesArray = [];
  for(const key in grades){
    gradesArray.push(grades[key]);

  }
  res.status(200).json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res)=> {
  const newGradesObj = {
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  }
  const id = nextId++;
  newGradesObj.id = id;
  grades[id] = newGradesObj
  res.json(newGradesObj);
  }
);

app.listen(3000, ()=> {
  console.log('Listening for port 3000');
});
