import app from "./lib/app";
import httpServer from "./lib/http/server";

const port = 8000;
app.attach(httpServer);
httpServer.listen(port, () => {
    console.log(`Server is now listening at port ${port}...`);
});
