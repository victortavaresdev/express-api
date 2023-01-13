const express = require("express");
const dotenv = require("dotenv");
require("express-async-errors");
const cors = require("cors");
const helmet = require("helmet");
const { router } = require("./routes");
const { requestLimit } = require("./config/rate-limit");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/api", router);
app.use("/api", requestLimit);

module.exports = app;
