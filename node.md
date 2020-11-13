const validator = require('validator');
const getNotes = require('./utils');
const word = 'ahmet@gmail.com';

console.log(getNotes());

console.log(validator.isURL(word))

//const fs = require('fs')
//const message = 'Hello world!'
//fs.appendFileSync('notes.db',message)
//fs.writeFileSync('notes.db',JSON.stringify(object))

/Users/LEGION/mongodb/bin/mongod.exe --dbpath=/Users/LEGION/mongodb-data



    // db.collection('users').insertOne({
    //     name: 'Can',
    //     age: 21
    // }, (error,result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Hasan',
    //         age:16
    //     },
    //     {
    //         name: 'candeniz',
    //         age:15
    //     }
    // ], (error,result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Hello world!',
    //         completed: false
    //     },
    //     {
    //         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus rem voluptates vero autem accusantium impedit!',
    //         completed: false
    //     },
    //     {
    //         description: 'Lorem ipsum dolor sit amet.',
    //         completed: false
    //     },
    // ],(error,result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    // })

     // db.collection('users').findOne({_id: new ObjectID('5fa7f2eaf6252f92cc0d902e' )}, (error, user)=> {

    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);

    // })
    // db.collection('users').find({age:21}).toArray((error,users) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(users);
    // })
    // db.collection('users').find({age:21}).count((error,count) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(count);
    // })
    db.collection('tasks').findOne({_id: new ObjectID('5fa7f57c207be84144c5fc81') },(error,task) => {
        if (error) {
            return console.log('Unable to fetch');
        }
        console.log(task);
    })

    db.collection('tasks').find({completed:false}).toArray((error,tasks) => {
        if (error) {
            console.log('Unable to fetch');
        }
        console.log(tasks);
    })

    
    // db.collection('users').deleteMany({
    //   age:21
    // }).then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // })

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5fa7f43c3e211f3cfca0314e"),
    //     },
    //     {
    //       $inc: {
    //         age: 15,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection('tasks').updateMany(    
    // {
    //     completed:false
    // },{
    //     $set:{
    //         completed:true,
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error)=> {
    //     console.log(error);
    // })

    const bcrypt = require('bcryptjs');

const myFunction = async () => {
  const password = 'Red12345!'
  const hashedPassword = await bcrypt.hash(password, 8)

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare('Red12345!',hashedPassword)
  console.log(isMatch);
}

myFunction()