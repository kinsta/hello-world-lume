import lume from "lume/mod.ts";

const site = lume();
site.ignore("README.md", "CHANGELOG.md", "node_modules");

export default site;
