import connectDatabase from "../config/DbConfig.js";

const connection = await connectDatabase(process.env.STRING_CONNECTION);

export default async function getAllPosts() {
    const db = connection.db("imersao-backend");
    const collection = db.collection("posts");
    return collection.find().toArray()
}