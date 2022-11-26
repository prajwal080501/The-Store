const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("../backend/config/database");

// handling uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`ERROR: ${err.message}`);
    console.log("Shutting down due to uncaught exception");
    process.exit(1);
});

dotenv.config({path: "backend/config/config.env"});

connectDatabase();

const server = app.listen(process.env.PORT, () => {
    try {
        console.log(`Server is running on port ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
        
    }
);



process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");
    server.close(() => {
        process.exit(1);
    });
});