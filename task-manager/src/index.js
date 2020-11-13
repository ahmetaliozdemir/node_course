const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require('./routers/task');


const app = express();
const port = process.env.port || 3000;


// app.use((req,res,next) => {
//   // console.log(req.method,req.path);
//   // next()
//   if (req.method === 'GET') {
//     res.send('GET request are disabled')
//   }else{
//     next()
//   }
// })

// app.use((req,res,next) => {
//   res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// const pet = {
//   name:'all'
// }

// pet.toJSON = function() {
//   console.log('selam');
//   return this
// }

// console.log(JSON.stringify(pet));

// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {expiresIn: '7 days'})
//   console.log(token);


//   const data = jwt.verify(token, 'thisismynewcourse')
//   console.log(data);
// }

// myFunction()