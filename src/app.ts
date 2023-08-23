import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const dbName = "confusion-server";

const connectToMongo = async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Conexión exitosa a MongoDB");
    client.db(dbName);
  } catch (error) {
    console.error("Error in connect to MongoDB", error);
    throw error;
  }
};
(async () => {
  await connectToMongo();
})();
