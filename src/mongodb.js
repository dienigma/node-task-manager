// CRUD operations
const mongodb = require("mongodb");

const { MongoClient, ObjectID } = mongodb;
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to a db");
    }
    const db = client.db(databaseName);

    db.collection("users")
      .insert({ name: "Chinmay", age: 25 })
      .then((result) => console.log("Deleted Successfully", result))
      .catch((err) => console.log(err));
  }
);
