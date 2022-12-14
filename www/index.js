'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const index_1 = require("./routes/index");
const middlewares_1 = require("./middlewares");
const PORT = process.env.PORT || 7001;
const app = express();
app.enable('trust proxy');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: 1024102420, type: 'application/json' }));
app.use(index_1.default);
app.use(middlewares_1.default.errors.logErrors);
app.use(middlewares_1.default.errors.errorHandler);
app.listen(PORT, () => console.log('Todo api listening on port', PORT));
