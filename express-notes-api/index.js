const express = require('express');
const json = require('./data.json')
const fs = require('fs');

const app = express();


app.get('/api/notes', (req, res)=> {
  const notesArray = [];
  for(const key in json.notes) {
    notesArray.push(json.notes[key]);
  }
  res.send(notesArray);
});


app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const errorString = {
    "error": 'id must have a positive integer',
  }
  const errorInvalidNumber = {
    "error": `cannot find note with id ${id}`
  }
  if( id >= 0 && !json.notes[id] ) {
    res.status(404).json(errorInvalidNumber)
    return;

  } else if(json.notes[id]){
    res.status(200).json(json.notes[id])

  } else {
    res.status(400).json(errorString);
  }
});

app.use(express.json());

const noContent = {
  "error": "content is required field"
}
const invalidContent = {
  "error": "An unexpected error has occured."
}


  app.post('/api/notes', (req, res, err) => {
    if (!req.body.content){
      res.status(400).json(noContent);
      return;
    }
    if(req.body.content) {
      json.notes[json.nextId] = req.body;
      req.body.id = json.nextId;
      json.nextId++;
      fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', err => {
        if(err) {
          console.error(err);
          res.status(500).json(invalidContent);
        }else {
          res.status(201).json(req.body);
        }
      });
    }
  });


app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const errorString = {
    "error": 'id must have a positive integer',
  }
  const errorInvalidNumber = {
    "error": `cannot find note with id ${id}`
  }
  if (id >= 0 && !json.notes[id]) {
    res.status(404).json(errorInvalidNumber)
    return;
  }
  if(!json.notes[id]) {
    res.status(400).json(errorString);
    return;
  }

  delete json.notes[id];
    fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json(invalidContent);
      } else {
        res.status(204).json(req.body);
      }
    });
});

app.put('/api/notes/:id', (req,res) => {
  const id = Number(req.params.id);
  const errorString = {
    "error": 'id must have a positive integer',
  }
  const errorInvalidNumber = {
    "error": `cannot find note with id ${id}`
  }
  if (id <= 0 || !json.notes[id] ) {
    res.status(400).json(errorString);
    return;
  }
  if (!req.body.content) {
    res.status(400).json(noContent);
    return;
  }

  if(id > 0 && req.body.content) {
    if(!json.notes[id]) {
      res.status(404).json(errorInvalidNumber);
      return;
    }
  } else if (json.notes[id]){
    req.body.id = Number(id);
    json.notes[id] = req.body;
    fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json(invalidContent);
      } else {
        res.status(204).json(req.body);
      }
    });
  }

});


  app.listen(3000, ()=> {
    // eslint-disable-next-line no-console
    console.log('Listening to port 3000');
  });
