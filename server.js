const express = require('express');
const app = express();

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

app.get('/api/v1/birds', (req, res) => {
  return res.status(200).json({ birds: app.locals.birds });
});

app.listen(app.get('port'), () => {
  console.log(`Life List API running on http://localhost:${app.get('port')}`);
});