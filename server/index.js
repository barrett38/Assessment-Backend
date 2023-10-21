const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const { getCompliment } = require("./controller");
app.get("/api/compliment", getCompliment);

const { getFortune } = require("./controller");
app.get("/api/fortune", getFortune);

const { getAurelius } = require("./controller");
app.get("/api/aurelius", getAurelius);

const { getThomas } = require("./controller");
app.get("/api/thomas", getThomas);

const PORT = 4000;
app.listen(4000, () => console.log(`Server running on ${PORT}`));
