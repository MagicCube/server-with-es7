import httpServer from "./lib/http/server";

const port = 8000;
httpServer.listen(port, () => {
    console.log(`Server is now listening at port ${port}...`);
});
