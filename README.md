# What is this

A collection of my dark modes. Use Stylus, Dark Reader or some other browser extension to apply them to websites.

I create my own only when [Dark Reader](https://darkreader.org/) does not work the way I want it to.

## FandomWikia - Fate／Grand Order - DarkMode

This is a simplistic dark mode for [Fandom Fate/Grand Order Wikia](https://fategrandorder.fandom.com/wiki/Fate/Grand_Order_Wikia). In this case, simplistic stands not only for the design of the pages and removal of videos, but also how the code was written (I've seen code much more convulated than this).

I made this mainly for myself, as all general purpose Fandom Wikia CSS most of the time generate a huge deformed mess. This code should be simple and also human readable.

As this was made to satisfy myself, not everyone will enjoy it. However, suggestions are welcome.

## Building as single file

Sometimes you may want to use CSS imports to better organize everything, and then you may want to collect all of their contents to one single css file, thus allowing for an easy select all, copy and paste combo. This has been done with Gulp.

### Install dependencies

```CMD
npm install
```

### Building

As long as the project is properly included in the `gulpfile.js` file, it will build the css files with the following command:

``` CMD
npm run build
```

All files will be generated to the `build` folder.
