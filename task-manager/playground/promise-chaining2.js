require("..//src/db/mongoose");
const Task = require("../src/models/task");

//5fa8c9813d4310a6cce721fc

// Task.findByIdAndRemove("5fa8c9813d4310a6cce721fc")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

  const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed:false});
    return count;
  }
  //5fa8d70b3c236f42fc5c22f4
  deleteTaskAndCount('5fa8d70b3c236f42fc5c22f4')
  .then((count) => {
    console.log(count);
  })
  .catch((e) => { 
    console.log(e);
  })