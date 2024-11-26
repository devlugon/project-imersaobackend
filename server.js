import express from "express";
import connectDatabase from "./src/config/DbConfig.js";

const connection = await connectDatabase(process.env.STRING_CONNECTION);

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("server listening...");
});

async function getAllPosts() {
    const db = connection.db("imersao-backend");
    const collection = db.collection("posts");
    return collection.find().toArray()
}

app.get("/posts", async (req, res) => {
    const posts = await getAllPosts()
    res.status(200).send(posts)
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersão!");
});