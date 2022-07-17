const mongoose = require("mongoose");
module.exports = async function conn() {
    try {
        const connParams = {
            useUnidentifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        };
        await mongoose.connect(process.env.URL, connParams);
        console.log('************* Database Connected *************');
    } catch (err) {
        console.log('######### Fail to connect DB #########' + err);
    }
};
