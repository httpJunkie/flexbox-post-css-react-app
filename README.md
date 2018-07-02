# React, PostCSS & AutoPrefixer

The `App` (Entry Component) only needs to import one css file. With PostCSS we can treat our `app.css` as an index to load other PostCSS files in order.

Each *import* should have a comment at the top of the page, with the files name, this aids in scanning the final composed `index.css` page that contains all of the imported css pages from `app.css`.

## Dependencies  
`npm-run-all` A CLI tool to run multiple npm-scripts in parallel or sequential.  
`autoprefixer` A PostCSS plugin which parse your CSS and add vendor prefixes.  
`postcss-cli` A CLI tool for PostCSS.  
`postcss-import` A PostCSS plugin to inline @import rules content.  
`postcss-nested` A PostCSS plugin to unwrap nested rules like how Sass does it.  
`postcss-preset-env` A PostCSS plugin to you convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments.  

*More PostCSS plugins avialable at: https://github.com/postcss/postcss*

## Flexbox CSS Classes
The styles used in this site are very basic flexbox styles that I have created that you can use in combination with each other to create simple and effective site layout decisions with.

The main idea is to build rows of columns at the end of the day. let's say that we want a very simple Header, Main Content Section and Footer. This is basically just a containing div and three child div's in the following stricture:

```
<div className="flex-container row">
  <div className="flex-item width-33">
    <Header />
  </div>
  <div className="flex-item width-33">
    <Main />
  </div>
  <div className="flex-item width-33">
    <Footer />
  </div>
</div>
```

Alternatively, if you wanted the surrounding flex-item div's to be the first element inside your React Components, your App JSX could just have the following markup:

```
<div className="flex-container row">
  <Header />
  <Main />
  <Footer />
</div>
```

ANd then each Component would have contents similar to this:

```
<div className="flex-item width-33">
  <h1>Header Title</h1>
</div>
```