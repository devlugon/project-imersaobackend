import express from "express";
import listPosts, { getAllPosts } from "../controllers/postsController.js"

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listPosts);
}



export default routes;