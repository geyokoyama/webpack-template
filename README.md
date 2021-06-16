# Webpack Template

This repo was initially for learning how to start projects using webpack, which
I've only utilized through the [create-react-app](https://create-react-app.dev/)
without knowing how to configure it. Once I have, I decided to keep the repo to
be used as a template for future projects.

## Usage

Once cloned, you'll want to make changes to the following file(s) to personalize
your project.

* **README.md** - This very file. You'll want your own README for your project.
* **package.json** - Change the name, author, and description for starters.
* **webpack.common.js** - Under `build-utils/`. Change the _title_ under
  _HtmlWebpackPlugin_ to your liking.
* **.env.(development|production)** - Add your own environmental variables.

Happy coding!

## Scripts

I use [yarn](https://yarnpkg.com/) as the node package manager.

|Command|Action|
|---|---|
|`start`|Start the development server|
|`build`|Build project in the `dist/` directory|

## Features (Modules & Plugins)

* [asset-modules](https://webpack.js.org/guides/asset-modules/) - Can process
  assets(png, jpg, gif).

## Todo

* create js/css folders to avoid clutter in src
