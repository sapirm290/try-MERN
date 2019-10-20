
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        message: {
            type: String,
            required: true
        }
        ,
        authorName: {
            type: String,
        },
        authorPhone: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Ride", DataSchema);
