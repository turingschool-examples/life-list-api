const express = require('express');
const app = express();

app.use(express.json());
app.set('port', process.env.PORT || 3001);

app.locals.birds = [
  {
    name: 'American Robin',
    date: '05-19-2023',
    place: 'In my backyard'
  },
  {
    name: 'Northern Flicker',
    date: '05-20-2023',
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

app.post('/api/v1/birds', checkRequiredProperties(['name', 'date', 'place']), (req, res) => {
  app.locals.birds.push(req.body);

  res.status(201).json({ message: 'Bird added to life list!' });
})


app.listen(app.get('port'), () => {
  console.log(`Life List API running on http://localhost:${app.get('port')}`);
});