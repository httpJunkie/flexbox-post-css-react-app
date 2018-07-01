# React, PostCSS & AutoPrefixer

The `App` (Entry Component) only needs to import one css file. With PostCSS we can treat our `app.css` as an index to load other PostCSS files in order.

Each *import* should have a comment at the top of the page, with the files name, this aids in scanning the final composed `index.css` page that contains all of the imported css pages from `app.css`.

## Dependencies  
`npm-run-all` A CLI tool to run multiple npm-scripts in parallel or sequential.  