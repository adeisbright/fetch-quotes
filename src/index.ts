import app from "./app"
import Config from "./config"
import connectTomongoDB from "./loader/mongoose-loader";

connectTomongoDB()
app.listen(Config.serverPort, () =>
    console.log(`Started at localhost:${Config.serverPort}`)
);

