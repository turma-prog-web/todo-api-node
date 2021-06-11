const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pkg = require('../package.json');
const { loadEnvVars } = require('./config');
loadEnvVars();
const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Banco Conectado'));

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  const { name, version, description, author } = pkg;
  return res.status(200).send({ name, version, description, author });
});

const task = require('./domains/task/route/task.route');
task(app);

app.listen(process.env.PORT, () => {
  console.log('API rodando...');
});
