const express = require('express');
const redis = require('redis');
const app = express();

const client = redis.createClient({
  url: 'redis://redis:6379'
});
client.connect();

app.get('/', async (req, res) => {
  let count = await client.get('visits') || 0;
  count++;
  await client.set('visits', count);
  res.send(`Page visited ${count} times`);
});

app.listen(3000, () => console.log('App running on port 3000'));
