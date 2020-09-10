const ghpages = require("gh-pages");
const path = require("path");

const pathToPublish = path.join(process.cwd(), "build");

ghpages.publish(pathToPublish, {
  message: "Publish to gh-pages",
});
