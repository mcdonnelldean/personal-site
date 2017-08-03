'use strict'

const Metalsmith  = require('metalsmith');
const Markdown    = require('metalsmith-markdown');
const Layouts     = require('metalsmith-layouts');
const Permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog",
    description: "It's about saying »Hello« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(Markdown())
  .use(Permalinks())
  .use(Layouts('handlebars'))
  .build((err, files) => {
    if (err) {
      throw err
    }
  })