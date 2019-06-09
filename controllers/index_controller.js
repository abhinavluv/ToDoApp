const Tasks = require('../models/tasks');

// use moment to format the date time being displayed on GUI
const moment = require('moment');

module.exports.home = function (request, response) {

    Tasks.find({}, function(error, task) {
        if(error) {
            console.log("Error in fetching results");
            return;
        }

        context = {
            'title': 'ToDo Application',
            'tasks': task,
            'moment': moment
        };
        return response.render('home', context);
    });
};

// add task as per entries from user
module.exports.addtask = function(request, response) {
    console.log("Add Task controller");
    console.log(request.body);

    // if user has not entered description and due date, he/she cannot proceed
    if(request.body.description === "" || request.body.duedate === "") {
        console.log("You need to fill out the fields");
        return response.redirect('back');
    }

    // if user has filled past due date, he/she cannot proceed
    // found difference between today and duedate. if number of days is less than 0 > cannot proceed
    if(moment(request.body.duedate).diff(moment(Date.now()), 'days') < 0) {
        const dateDifference = moment(request.body.duedate).diff(moment(Date.now()), 'days');
        console.log("Select future date... Date difference: ", dateDifference, "days.");
        return response.redirect('back');
    }

    // if user has filled the required fields and date validation is passed
    Tasks.create(request.body, function(error, task) {
       console.log(task.body);
       if(error) {
           console.log("Error while creating task: ", error);
           return;
       }
       return response.redirect('back');
    });
};

// get id from d into route and use it delete item by Id
module.exports.deletetask = function(request, response) {
  Tasks.findByIdAndDelete(request.params._id, function(error, task) {
    console.log(request.params._id);
     if(error) {
         console.log("Error to delete the task");
         return;
     }
      return response.redirect('back');
  });
};