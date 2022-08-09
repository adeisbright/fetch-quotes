import app from "./app"
import Config from "./config"

app.listen(Config.serverPort, () =>
    console.log(`Started at localhost:${Config.serverPort}`)
);

