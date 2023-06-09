const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.set('port', process.env.PORT || 3001);

app.locals.birds = [
  {
    id: 1,
    birdName: 'American Robin',
    date: '2023-05-19',
    place: 'In my backyard'
  },
  {
    id: 2,
    birdName: 'Northern Flicker',
    date: '2023-05-20',
    place: 'In my front yard'
  }
]

// Required body properties middleware
const checkRequiredProperties = props => (req, res, next) => {
  const reqPropsList = Object.keys(req.body);
  const hasAllRequiredProps = props.every(prop =>
      reqPropsList.includes(prop)
  );

  if (!hasAllRequiredProps) {
    return res.status(422).send(`The following properties are required in the request body: ${props.join(", ")}`);
  }

  next();
};

// Endpoints
app.get('/api/v1/birds', (req, res) => {
  return res.status(200).json({ birds: app.locals.birds });
});

app.post('/api/v1/birds', checkRequiredProperties(['birdName', 'date', 'place']), (req, res) => {
  const newID = app.locals.birds.reduce((highest, bird) => {
    if (bird.id > highest) {
      highest = bird.id
    }
    
    return highest;
  }, 0) + 1;

  const newBird = {id: newID, ...req.body};
  app.locals.birds.push(newBird);
  res.status(201).json(newBird);
});


app.listen(app.get('port'), () => {
  console.log(`Life List API running on http://localhost:${app.get('port')}`);
});