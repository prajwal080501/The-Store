const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("../backend/config/database");

dotenv.config({path: "backend/config/config.env"});

connectDatabase();

app.listen(process.env.PORT, () => {
    try {
        console.log(`Server is running on port ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
        
    }
);
