// CRUD create read update delete

const { MongoClient, ObjectID} = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
// console.log(id.id.length)
// console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);


    db.collection('tasks').deleteOne({
      description: 'Hello world!'
    }).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    })

  }
);
