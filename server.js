import express from "express";
import connectDatabase from "./src/config/DbConfig.js";

await connectDatabase(process.env.STRING_CONNECTION)

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("server listening...");
});

app.get("/posts", (req, res) => {
    res.status(200).send(posts)
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersão!");
});

function findPostById(id){
    return posts.findIndex((post) =>{
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = findPostById(req.params.id)
    res.status(200).send(posts[index])
});