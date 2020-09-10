// This script copies the current contents of the "build" directory to the gh-pages branch.

const ghpages = require("gh-pages");
const path = require("path");

const pathToPublish = path.join(process.cwd(), "build");

ghpages.publish(pathToPublish, {
  message: "Publish to gh-pages",
});
