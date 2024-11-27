import express from "express";
import { listPosts, createNewPost } from "../controllers/postsController.js"

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listPosts);
    app.post("/posts", createNewPost)
}

export default routes;