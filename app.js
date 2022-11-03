    //require the Mongoose package (after running >npm i mongoose in Hyper to install it)
    const mongoose = require('mongoose');
     
    //connect to MongoDB by specifying port to access MongoDB server
    main().catch(err => console.log(err));
     
    async function main() {
      await mongoose.connect('mongodb://localhost:27017/fruitsDB');
      }
     
    //create a SCHEMA that sets out the fields each document will have and their datatypes
    const fruitSchema = new mongoose.Schema ({
    	name: {
            type: String,
            required: [true, "Please check tour data entry, no name specified."]
        },  
        rating: {
            type:Number,
            min: 1,
            max: 10
        },
    	review: String
    });
     
    //create a MODEL
    const Fruit = new mongoose.model ("Fruit", fruitSchema);
     
    //create a DOCUMENT
    /*const fruit = new Fruit ({
        name: "Apple",
    	rating: 10,
    	review: "Peaches are so yummy!"
    });
     
    //save the document
    fruit.save(); */
     
    //**CHALLENGE: Set up a people database with one document and two fields**//
    //create a SCHEMA
    const personSchema = new mongoose.Schema({
      name: String,
      age: Number,
      favoriteFruit: fruitSchema
    });
     
    //create a MODEL
    const Person = mongoose.model('Person', personSchema);

    const pineapple = new Fruit({
        name: "Pineapple",
        score: 9,
        review: "Great fruit!"
    });
    
    pineapple.save();

    //create a DOCUMENT
    const person = new Person({
      name: "Amy",
      age: 12,
      favoriteFruit: pineapple
    });
     
    //Save it
    person.save();

    const kiwi = new Fruit({
        name: "Kiwi",
        score: 10, 
        review: "The best fruit!"
    });

    const orange = new Fruit({
        name: "Orange",
        score: 4, 
        review: "Kinda sour..."
    });

    const banana = new Fruit({
        name: "Banana",
        score: 3, 
        review: "Weird texture"
    });

    const peach = new Fruit({
        name: "Peach",
        score: 8, 
        review: "Peaches are so yummy!"
    });

    peach.save()
    //kiwi.save()
    //orange.save()
    //banana.save()

    Fruit.find(function(err, fruits){
        if(err) {
            console.log(err);
        } else {
            console.log(fruits);

            mongoose.connection.close();

            fruits.forEach(function(fruit){
                console.log(fruit.name);
                console.log(fruit.review);
            })
        }
    });

    Fruit.updateOne({rating: 8}, {name:"Peach"}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Successfully updated the document!"); 
        }
    }); 