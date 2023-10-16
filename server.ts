import Server from "https:/deno.land/x/lume/core/server.ts";

const port = Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8000;
const server = new Server({
    port: port,
    root: `_site`
});

server.start();

console.log("Listening on " + port);