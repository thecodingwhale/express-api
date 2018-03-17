import mongoose from 'mongoose';
const Task = mongoose.model('Tasks');

export function list_all_tasks(req, res) {
  Task.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
}

export function create_a_task(req, res) {
  const new_task = new Task(req.body);
  new_task.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
}

export function read_a_task(req, res) {
  Task.findById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
}

export function update_a_task(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
}

export function delete_a_task(req, res) {
  Task.remove(
    {
      _id: req.params.taskId,
    },
    (err, task) => {
      if (err) res.send(err);
      res.json({message: 'Task successfully deleted'});
    }
  );
}
