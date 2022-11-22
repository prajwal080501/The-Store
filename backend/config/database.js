const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
    path: "../config/config.env"
});


const connectDatabase = () => {
    mongoose.connect(
        process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then((data) => {
        console.log("Connected to MongoDB", data.connection.host);
    }
    ).catch((err) => {
        console.log(err);
    }
    );
}

module.exports = connectDatabase;