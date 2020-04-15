# Minesweeper

# Phase 0: Setup
- Create `index.html`, `application.css`, and `react_minesweeper.jsx` files.
- Create a components folder, where we'll put our `Tile`, `Board`, and `Game` React components.
- As with the Widgets project, run `npm init --yes` and install all of the packages we used for Widgets, remembering to use `--save` so they get registered as dependencies in our `package.json`.
- Set up your `webpack.config.js` as well, which other than your `entry` file should look the same as it did for Widgets.
- Lastly, remember to source `bundle.js` into `index.html`.

Once your files are set up, add the following to the "scripts" section of your package.json: "start": "webpack --watch --mode=development". Run npm start and open index.html to see your app.