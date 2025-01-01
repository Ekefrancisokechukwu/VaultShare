import http from "http";
import { app } from "./app.js";
import connectDB from "./config/db.js";
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const start = async () => {
    try {
        connectDB(process.env.MONGO_URL);
        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("Error starting server:", error);
    }
};
start();
