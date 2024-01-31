const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/food", controller.getFood);

app.get("/api/coffee", controller.getCoffee);
app.get("/api/review", controller.getReview);

app.get('/param/:param', controller.getParam);
app.get('/query', controller.getQuery);

app.listen(4000, () => console.log("Server running on 4000"));
