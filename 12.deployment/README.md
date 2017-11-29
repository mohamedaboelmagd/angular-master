# DeployDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

##Build AOT
`ng build --prod --no-sourcemap --aot`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## github pages
`sudo npm i -g angular-cli-ghpages`
`ng build --prod --base-href="https://mohamedaboelmagd.github.io/angular-master/"`
`sudo ngh --no-silent`
`open this url --> https://mohamedaboelmagd.github.io/angular-master/`
One command
`npm run deploy:gh`
(https://mohamedaboelmagd.github.io/angular-master/)

## firebase
`sudo npm i -g firebase-tools`
`firebase login`
`firebase init`
`ng build --prod`
`firebase deploy`
One command
`npm run deploy:firebase`
(https://angular-awesome.firebaseapp.com/)

## heroku
`node --version`
old node --v is 6.10.3
`sudo n v8.9.1`
now 8.9.1
`npm install -g heroku-cli`
`heroku --version`
`heroku login`
`heroku create`
`heroku open`
`npm i express --save`
