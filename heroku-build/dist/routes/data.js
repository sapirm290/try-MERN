"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// this will be our data base's data structure 
const DataSchema = new Schema({
    message: String,
    authorName: String,
    authorPhone: String
}, { timestamps: true });
// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
//# sourceMappingURL=data.js.map