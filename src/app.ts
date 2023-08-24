import { MongoClient } from "mongodb";
import operations from "./utils/operations.util";
const uri = "mongodb://localhost:27017/";
const dbName = "confusion-server";

const connectToMongo = async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to Mongo successfully");
    const db = client.db(dbName);

    await operations.insertDocument(
      db,
      { name: "Vadonut", description: "Test" },
      "dishes"
    );
    await operations.findDocuments(db, "dishes");

    await operations.updateDocument(
      db,
      { name: "Vadonut" },
      { description: "Vadonut" },
      "dishes"
    );

    await operations.findDocuments(db, "dishes");

    await operations.removeDocument(db, { name: "Vadonut" }, "dishes");
  } catch (error) {
    console.error("Error in connect to MongoDB", error);
    throw error;
  }
};
(async () => {
  await connectToMongo();
})();
