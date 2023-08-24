import { MongoClient } from "mongodb";
import operations from "./utils/operations.util";
const uri = "mongodb://localhost:27017/";
const dbName = "confusion-server";

const connectToMongo = async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Conexión exitosa a MongoDB");
    const db = client.db(dbName);

    await operations.insertDocument(
      db,
      { name: "Vadonut", description: "Test" },
      "dishes",
      async (data: any) => {
        await operations.findDocuments(db, "dishes", async (data: any) => {
          console.log(data);
          await operations.updateDocument(
            db,
            { name: "Vadonut" },
            { description: "Vadonut" },
            "dishes",
            async (result: any) => {
              await operations.findDocuments(
                db,
                "dishes",
                async (data: any) => {
                  console.log(data);
                  await operations.removeDocument(
                    db,
                    "dishes",
                    async (result: any) => console.log(result)
                  );
                }
              );
            }
          );
        });
      }
    );
  } catch (error) {
    console.error("Error in connect to MongoDB", error);
    throw error;
  }
};
(async () => {
  await connectToMongo();
})();
