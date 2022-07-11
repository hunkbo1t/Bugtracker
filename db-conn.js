const mongoose = require("mongoose");
const db = mongoose.connect(process.env.db,{
    useUnidentifiedTopology: true,
    useNewUrlParser: true,
})

module.exports = db;