import lume from "lume/mod.ts";

const port = Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8000;
const site = lume({
    server: {
        port: port
    }
});

site.ignore("README.md", "CHANGELOG.md", "node_modules");

export default site;
