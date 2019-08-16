<h1 align="center">
  IBM Design Research
</h1>

This site is built using with the [Gatsby Carbon](https://github.com/carbon-design-system/gatsby-theme-carbon) theme which includes all configuration you might need to build a beautiful site inspired by the [Carbon Design System](https://www.carbondesignsystem.com).

## 🧗 Getting started

Install dependencies:

```
yarn
```

Run dev environment:

```
yarn dev
```

3. **Make some changes!**

Navigate to `localhost:8000` to see your site running

Each of the Items in your side bar correlates to a MDX file in your `src/pages/` directory. Navigate to a site and try editing the corresponding markdown file. You'll be able to see it update live!

## 🔍 What's in here?

Lets check out the structure of our project

    .
    ├── LICENSE
    ├── README.md
    ├── gatsby-config.js
    ├── node_modules
    ├── package.json
    ├── public
    ├── src
    │   ├── gatsby-theme-carbon
    │   └── pages
    └── yarn.lock

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site.

    - **gatsby-theme-carbon** this is where you'll override (known as shadowing) the default `gatsby-theme-carbon` components
    - **pages** This is where most of your content will live. You'll represent each page with an MDX file.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description. You'll notice that all of the configuration for the site is coming from `gatsby-theme-carbon`

1.  **`LICENSE`**: Gatsby is licensed under the Apache 2.0 license.

1.  **`yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: This file!

## 👷‍ Components

This is where we'll document the various utility components as they're added.

## 📘 Resources

1. [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/)
1. [MDX](https://mdxjs.com/)

## 🚀 Deployment to Bluemix (Staging)

Download the [Blue-Green-Deploy](https://github.com/bluemixgaragelondon/cf-blue-green-deploy) Plugin for Cloud Foundry.

`cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org && cf install-plugin blue-green-deploy -r CF-Community`

Make sure you are in the IBMDesignOrg (See Kelly Churchill)

`yarn deploy:staging`

Staging site 👉 https://wwwstage.ibm.com/design/research

## 🚀 Deployment to Bluemix (Production)

Make sure you are in the IBMDesignOrg (See Kelly Churchill)

`yarn deploy:prod`

Production site 👉 https://www.ibm.com/design/research
