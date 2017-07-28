//Below are same
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

//callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Error");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Error");
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: "Dandy",
        age: 29,
        location: "Jakarta"
    }, (err, result) => {
        if (err) {
            return console.log("Error");
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();
});