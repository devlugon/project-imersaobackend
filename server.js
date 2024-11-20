import express from "express";

const app = express();
app.listen(3000, () => {
    console.log("server listening...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersão!");
});