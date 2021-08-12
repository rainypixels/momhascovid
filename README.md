## Mom Has Covid

This repository contains the source code, pdf, and blood test reports for [momhascovid.com](https://momhascovid.com).

### Installing & Running

Run `npm install` in the root folder after cloning the repo. To run the project and start the Browsersync live reload, run the gulp task `npm run dev`. Changes to the `./src/css`, `./src/index.html`, `./docs`, and `./images` will immediately use Tailwind’s JIT compiler to rebuild, and Browsersync will reload the site. 

### Site Structure

The source files are contained in `./src`. The `dev` and `build` commands (see commands below) compile the changes copy the resulting files to the `./build`. The Browsersync server is configured to use the `./build` folder as the root. Here’s a quick description of the config/workflow files in the project:

| File  | Purpose |
| ------------- | ------------- |
| [`./gulpfile.js`](gulpfile.js) | The gulp script that provides various commands like hot reload, compilation, accessibility testing, etc. | 
| [`./tailwind.config.js`](tailwind.config.js) | Required by Tailwind, this has all the core configurations for the site. |
| [`./postcss.config.js`](postcss.config.js) | This is the postcss config. We use a bunch of postcss plugins (e.g. minification) |
| [`./package.json`](package.json) | All the packages used by this project |

### Commands

| Command  | Purpose |
| ------------- | ------------- |
| `npm run dev`  | Start server and hot reload all development changes in the browser  |
| `npm run build`  | Do a production build (this minifies, too) |
| `npm run accessibility` | Test accessibility and generate a report |
| `npm run accessibility2` | Test accessibility and print a report to the console |

### Credits

The custom, static front-end is built using vanilla HTML, CSS, and JavaScript with the help of a few incredible open source packages including [Tailwind](https://tailwindcss.com) supercharged with plugins like [Tailwind Utopia](https://github.com/cwsdigital/tailwind-utopia) for fluid type, [Gulp](https://gulpjs.com) for workflow management, [PostCSS](https://github.com/postcss/postcss) for compiling, [Alpine.js](https://alpinejs.dev) for interactivity, [Pa11y](https://github.com/pa11y/pa11y) for accessibility testing, and more. Check out [./package.json](package.json) for the full list. 

We use [BrowserStack](https://www.browserstack.com) for cross-browser testing. Images and SVG are compressed with [ImageOptim](https://github.com/pa11y/pa11y) prior to the build process. Type is set in [Lora](https://fonts.google.com/specimen/Lora). SVG Icons are from [Bootstrap Icons](https://icons.getbootstrap.com). [Transmit 5](https://panic.com/transmit/) pushes updates to an [S3 Bucket](https://aws.amazon.com/s3/), and [CloudFlare](https://www.cloudflare.com) delivers the content safely, quickly, and securely. 

### Get In Touch

For general questions, feedback about content, or really, anything, email [momhascovid@gmail.com](mailto:momhascovid@gmail.com).
