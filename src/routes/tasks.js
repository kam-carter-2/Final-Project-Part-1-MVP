const express = require('express');
const router = express.Router();

let tasks = [];

router.get('/', (req, res) => {
  res.json(tasks);
});

router.post('/', (req, res) => {
  const { title } = req.body;
  const newTask = { id: Date.now(), title };
  tasks.push(newTask);
  res.json(newTask);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id != id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
