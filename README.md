# Webpack Template

This repo was initially for learning how to start projects using webpack, which
I've only utilized through the [create-react-app](https://create-react-app.dev/)
without knowing how to configure it. Once I have, I decided to keep the repo to
be used as a template for future projects.

## Usage

Once cloned, you have 3 steps.

1. Install dependencies, e.g. `yarn install`.

2. Then, run `env-init` to create the following files:

   * **.env.development** - Create this to add your own environmental variables.
   * **.env.production** - Create this to add your own environmental variables.

3. Finally, you'll want to make changes to the following file(s) to personalize
your project:

    * **README.md** - This very file. You'll want your own README for your project.
    * **package.json** - Change the name, author, and description for starters.
    * **webpack.common.js** - Under `build-utils/`. Change the _title_ under
    _HtmlWebpackPlugin_ to your liking.

Happy coding!

## Scripts

I use [yarn](https://yarnpkg.com/) as the node package manager.

|Command|Action|
|---|---|
|`start`|Start the development server|
|`build`|Build project in the `dist/` directory|
|`env-init`|Create `.env.development` and `.env.production`|

## Features (Modules & Plugins)

* [asset-modules](https://webpack.js.org/guides/asset-modules/) - Can process
  assets(png, jpg, gif).

## Todo

* create js/css folders to avoid clutter in src
