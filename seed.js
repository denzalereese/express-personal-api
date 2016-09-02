// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var newTodo = {
  title: "Organize your life",
  description: "Weekly plan, calendar, budget, etc etc"
}

db.Todo.remove({}, function(err, todos) {
  console.log("removed all Todos");

  db.Todo.create(newTodo, function(err, todos){
  if (err){
    return console.log("Error: ", err);
  }

  console.log("Created new todo", todos._id);
  process.exit(); // we're all done! Exit the program.
  });
});

