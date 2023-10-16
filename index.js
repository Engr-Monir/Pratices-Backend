
const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();


//middleware
 app.use(express.json());
 app.use(cors());


// monirweb420
// 


const port = process.env.PORT || 5001;






const uri = "mongodb+srv://monirweb420:CGz3jeEgg5r5vPJr@cluster0.vkbl4bq.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
//user collection
 const userCollection = client.db("userDatabase").collection("users");
 app.post ("/users",async (req, res) => { 
  const user = req.body;  
    const result=await userCollection.insertOne(user);
    res.send(result);

 })
==



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("successfully connected to Mongo!");






  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);







app.get("/", (req, res) => {
    res.send("Crud is running...");
  });
  
  app.listen(port, () => {
    console.log(`Simple Crud is Running on port ${port}`);
  });
    

