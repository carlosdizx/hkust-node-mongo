import { MongoClient, Db } from "mongodb";
import assert from "assert";

const uri = "mongodb://localhost:27017/";
const dbName = "confusion-server";

const connectToMongo = async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Conexión exitosa a MongoDB");

    const database = client.db(dbName);
    const collection = database.collection("dishes");
    await collection.insertOne({ name: "Uthapizza", description: "test" });
  } catch (error) {
    console.error("Error al conectarse a MongoDB:", error);
    throw error;
  }
};
(async () => {
  await connectToMongo();
})();
