//Below are same
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Error");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').find({
    //     _id: new ObjectID("597b58a6ce87813ad4016f07")
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Error", err);
    // });

    db.collection('Todos').find({
        _id: new ObjectID("597b58a6ce87813ad4016f07")
    }).count().then((count) => {
        console.log(`Count: ${count}` );        
    }, (err) => {
        console.log("Error", err);
    });

    //db.close();
});