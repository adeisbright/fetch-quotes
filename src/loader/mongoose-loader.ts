import { connection , connect } from "mongoose";
import Config from "../config";
import constants from "../constant";
import fileLogger from "../common/logging/file-logger";
import mongooseOptions from "./mongoose-option";

const connectTomongoDB = async () => {
    try {
        await connect(Config.mongoURL, mongooseOptions)
            .then(() => {
                fileLogger.log({
                    message: constants.mongoConnect, 
                    level:"info"
                })
                console.log(constants.mongoConnect)
            })
            .catch((error) => {
                fileLogger.log({
                    message: error.message,
                    level:"error"
                })
                console.log(error)
            });

        process.on("SIGINT", async () => {
            await connection.close()
            fileLogger.log({
                message: constants.mongoTerminate, 
                level:"info"
            })
            console.log(constants.mongoTerminate);
            process.exit(0);
        });
        return;
    } catch (error:any) {
        fileLogger.log({
            message: error.message,
            level:"error"
        })
        console.log(error);
    }
};

export default connectTomongoDB;
