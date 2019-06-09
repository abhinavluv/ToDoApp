const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
   description: {
       type: String,
       required: true
   },
   categories: {
       type: String
   },
   duedate: {
       type: Date,
       required: true
   }
});

const Tasks = mongoose.model('Tasks', taskSchema);
module.exports = Tasks;