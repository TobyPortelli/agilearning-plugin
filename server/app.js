import express from "express";
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../client/dist/index.html"),
        (err) => {
            if (err) {
                res.status(500).send(err);
            }
        }
    );
});

app.listen(PORT, () => {
    console.log(`App is running on ${port}`);
})