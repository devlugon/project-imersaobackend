import { getAllPosts, createPost, updatePost} from "../models/postsModel.js";
import fs from "fs";

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

export async function imageUpload(req, res) {
    const newPost = {
        descricao: "",
        imgUrl: req.file.originalname, 
        alt: ""
    };
    try {
        const createdPost = await createPost(newPost);
        const updatedImage = `uploads/${createdPost.insertedId}.png`
        fs.renameSync(req.file.path, updatedImage)
        res.status(200).json(createdPost);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}

export async function updateNewPost(req, res) {
    const id = req.params.id;
    const urlImage = `http://localhost:3000/${id}.png`;
    const post = {
        imgUrl: urlImage,
        descricao: req.body.descricao
    }
    try {
        const createdPost = await updatePost(id, post);
        res.status(200).json(createdPost);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}