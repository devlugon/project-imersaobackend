import connectDatabase from "../config/DbConfig.js";

const connection = await connectDatabase(process.env.STRING_CONNECTION);

export async function getAllPosts() {
    const db = connection.db("imersao-backend");
    const collection = db.collection("posts");
    return collection.find().toArray()
}

export async function createPost(newPost) {
    const db = connection.db("imersao-backend");
    const collection = db.collection("posts");
    return collection.insertOne(newPost)
}