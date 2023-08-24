import { Db } from "mongodb";

const insertDocument = async (
  db: Db,
  document: any,
  collectionName: string,
  callback: Function
) => {
  const collection = db.collection(collectionName);
  const result = await collection.insertOne(document);
  callback(result);
};

const findDocuments = async (
  db: Db,
  collectionName: string,
  callback: Function
) => {
  const collection = db.collection(collectionName);
  const result = await collection.find().toArray();
  callback(result);
};

const removeDocument = async (
  db: Db,
  collectionName: string,
  callback: Function
) => {
  const collection = db.collection(collectionName);
  const result = await collection.drop();
  callback(result);
};

const updateDocument = async (
  db: Db,
  document: any,
  updateDocument: any,
  collectionName: string,
  callback: Function
) => {
  const collection = db.collection(collectionName);
  const result = collection.updateMany(document, {
    $set: { ...updateDocument },
  });
  callback(result);
};

const operations = {
  insertDocument,
  findDocuments,
  removeDocument,
  updateDocument,
};
export default operations;
