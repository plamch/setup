## Install

`npm install`

## Start development

`npm run start`

## Build for production

###Run build
`npm run build`

## Lint

`npm run lint`

## Stack - development

* immutable
* fetch
* ramda
* react
* react-notifications
* redux
* redux-saga
* reselect

### Flux pattern and Redux implementation is used for extracting the state from the components and state management

#### More information

* http://redux.js.org/
* https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.7seyk7lki
* https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.ora8ogxa5

#### Used in project

* app/js/store/\*\*
* app/js/reducers/\*\*

### Facebook's Immutable.js is used for creating immutable collections

#### More information

* https://facebook.github.io/immutable-js/

#### Used in project (mostly in)

* app/js/reducers/\*\*
* app/js/utils/\*\*

### ramda is used as a practical functional library

#### More information

* http://ramdajs.com/

### fetch is used for handling ajax calls

#### More information

*

#### Used in

* app/js/utils/services.js

### Redux saga is used for handling the asynchronous flow of the application via generators

#### More information

* http://yelouafi.github.io/redux-saga/docs/api/
* https://davidwalsh.name/es6-generators

#### Used in

* app/js/saga/\*\*

### react-notifications is used as third-party library for easier implementation of notifications
