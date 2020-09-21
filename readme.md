# christophgockel.de

## Setup

This website is built with Jekyll and Tailwind CSS.


### Requirements

- Ruby 2.6.5
- Node 12.14.0
- Yarn


### Local development

First make sure all Node specific dependencies are installed:

```
yarn install
```

Next install all Ruby dependencies via:

```
bundle install
```

With everything installed you can execute

```
bundle jekyll serve
```

to run the website locally on https://localhost:8080.
Everything will be automatically rebuild when files are changed.
As there's no browsersync or equivalent configured you need to manually refresh the browser page after making a change.
