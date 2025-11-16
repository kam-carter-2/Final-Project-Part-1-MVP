const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('SmartTask API is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
