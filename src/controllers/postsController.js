import { getAllPosts, createPost } from "../models/postsModel.js";

export async function listPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).send(posts);
}

export async function createNewPost(req, res) {
    const newPost = req.body;
    try {
        const createdPost = await createPost(newPost);
        res.status(200).json(createdPost);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}
