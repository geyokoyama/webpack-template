# Webpack Template

This repo was initially for learning how to start projects using webpack, which
I've only utilized through the [create-react-app](https://create-react-app.dev/)
without knowing how to configure it. Once I have, I decided to keep the repo to
be used as a template for future projects.

## Install

Install dependencies, e.g. `yarn install`.

## Usage

**Important**: Don't forget to change the remote origin if you've cloned the repo!!
`git remote set-url origin NEW_URL`

Once installed, you have 3 steps.

1. Create environmental files e.g. `yarn dotenv`:

   * **.env.development** - Create this to add your own environmental variables.
   * **.env.production** - Create this to add your own environmental variables.

2. Then, you'll want to make changes to the following file to personalize your
project:

    * **README.md** - This very file. You'll want your own README for your project.
    * **package.json** - Change the name, author, and description for starters.
    * **webpack.common.js** - Under `build-utils/`. Change the _title_ under
    _HtmlWebpackPlugin_ to your liking.

3. Two options here; development or production.

### Development

* Start development server e.g. `yarn start`.

### Production

* Build your production build e.g. `yarn build`.

Happy coding!

## Scripts

I use [yarn](https://yarnpkg.com/) as the node package manager.

|Command|Action|
|---|---|
|`start`|Start the development server|
|`build`|Build project in the `dist/` directory|
|`env-init`|Create `.env.development` and `.env.production`|

## Features

* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [PostCSS](https://postcss.org/)
* [Sass](https://sass-lang.com/)
* Webpack development server with hot module replacement
* Separate development and production webpack configs
* Secure environmental variables with [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack)
* Sourcemaps for easier debugging
* Supports Babel for new JavaScript syntax and features
* Better CSS writing experience with PostCSS and Sass
