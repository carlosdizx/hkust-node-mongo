import { Db } from "mongodb";

const insertDocument = async (
  db: Db,
  document: object,
  collectionName: string
) => {
  const collection = db.collection(collectionName);
  return await collection.insertOne(document);
};

const findDocuments = async (db: Db, collectionName: string) => {
  const collection = db.collection(collectionName);
  return await collection.find().toArray();
};

const removeDocument = async (
  db: Db,
  document: object,
  collectionName: string
) => {
  const collection = db.collection(collectionName);
  return await collection.deleteOne(document);
};

const updateDocument = async (
  db: Db,
  document: object,
  updateDocument: object,
  collectionName: string
) => {
  const collection = db.collection(collectionName);
  return collection.updateMany(document, {
    $set: { ...updateDocument },
  });
};

const operations = {
  insertDocument,
  findDocuments,
  removeDocument,
  updateDocument,
};
export default operations;
