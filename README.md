# Number fractal visualizer

This is a quick little React app I threw together to investigate how numbers are ordered when sorted alphabetically by their English spelling. The layout is not optimized at all – don't try to look at this on a phone!

I also used it as an opportunity to experiment with a "plugin" architecture, to make the app more easily expandable/configurable. Hence, it would be easy to add more chart libraries or languages in the future.

I also wanted to experiment with some different chart libraries. Here is what I found:

- [react-charts](https://react-charts.tanstack.com/) does not support TypeScript, so unfortunately I won't be using it in this TypeScript project.
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2) supports TypeScript very minimally (there are typedefs, but all the interesting types are merely "any"). I ended up using it here just to get a quick chart, but I wouldn't use it in a production TypeScript app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
