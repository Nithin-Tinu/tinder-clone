import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

//App congfig
const app = express();
const port = process.env.PORT || 2029
const conn_url = 'mongodb+srv://nithin:1829@cluster0.98reckb.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middleware
app.use(express.json())
app.use(Cors())

//DB config
mongoose.connect(conn_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// api endpoints
app.get('/', (req, res) => res.status(200).send("Hello Nithin!!!!!"));

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
    
});

app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});

//listener
app.listen(port, () => console.log(`listening on localhost :${port}`));