import config from "config";

import app from "./lib/app";
import httpServer from "./lib/http/server";


(function main()
{
    checkEnvironment();
    startHttpServer();
})();


function checkEnvironment()
{
    const env = app.get("env");
    if (env === "development")
    {
        console.log("Server is now started in [DEVELOPMENT] mode.");
    }
    else if (env === "production")
    {
        console.log("Server is now started in [PRODUCTION] mode.");
    }
    else
    {
        throw new Error(`Unsupported deployment environment: ${env}`);
    }
}

function startHttpServer()
{
    const port = parseInt(config.get("http.port"));
    if (isNaN(port))
    {
        throw new Error(`"http.port" must be specified as number in config.`);
    }

    app.attach(httpServer);
    httpServer.listen(port, () => {
        console.log(`Server is now listening at port ${port}...`);
    });
}
