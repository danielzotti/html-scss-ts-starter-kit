# HTML + SCSS + TS starter kit

This repo has been created primarily to have a boilerplate of SCSS code ready to use.

## File structure

- `scss`: scss files root folder
    - `animations` (folder):
        - `_[animation-name].scss`: add here every animation you want to use in the project.
    - `mixins` (folder):
        - `_[mixin-name].scss`: add here every mixin you want to use in the project.
    - `_base.scss`: all the common html tags are styled here.
    - `_common.scss`: all the common classes are styled here.
    - `_fonts.scss`: all the fonts are imported here.
    - `_layout.scss`: all the layout classes are styled here.
    - `_reset.scss`: the reset file. I'm using [normalize.css](https://github.com/necolas/normalize.css).
    - `_theme.scss`: all the CSS variables (colors) for dark/light theme are styled here.
    - `_variables.scss`: all the global SCSS variables are defined here.
    - `_variables-css.scss`: all the global CSS variables are defined here.
    - `styles.scss`: the entry point of the SCSS code; it imports all the other files.

## Demo

https://danielzotti.github.io/html-scss-ts-starter-kit


## Notes
- [Static deploy on GitHub pages](https://vitejs.dev/guide/static-deploy.html)
