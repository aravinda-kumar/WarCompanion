# Ionic Stencil Essential
Ionic Essential Stencil is a UI kit that contains beautifully crafted, frequently used screens allowing developers to build gorgeous and highly customizable mobile apps with minimal effort.

## Dependecies, Run and Build

### Install Ionic CLI
To build and run this app you need to have Ionic CLI installed

```bash
$ sudo npm install -g ionic
```

You can revert back and restore any version of Ionic CLI by using the command:
```bash
$ sudo npm install -g {ionic version}
```

eg:
```bash
$ sudo npm install -g ionic@1.7.14
```

### Install NodeJS dependencies
Run `$ npm install` to install all needed dependencies.

### Install plugins from package.json
Run `$ ionic cordova prepare ios` to install all Cordova plugins included in the package.json and add iOS platform to your project.

Run `$ ionic cordova prepare android` to install all Cordova plugins included in the package.json and add Android platform to your project.

### Run the app
Use `$ ionic serve -l` to run the app in browser for multiple platforms

or

use `$ ionic serve` to just run the app for a browser preview

### Add a platform
```bash
$ ionic cordova platform add <platform>
```

Supported Cordova platforms:
```bash
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

### Build the app
```bash
$ ionic cordova build
```

### Εmulate the app on simulator
iOS:
```bash
$ ionic cordova emulate ios
```

Android:
```bash
$ ionic cordova emulate android
```

### Plugins installation
Use the following commands and install all the plugins required by the app:
```bash
$ cordova plugin add {plugin id or url}
```

eg:
```bash
cordova plugin add cordova-plugin-inappbrowser
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

* **cordova-plugin-whitelist** - This plugin implements a whitelist policy for navigating the application webview on Cordova 4.0.
* **cordova-plugin-statusbar** - This plugin provides some functions to customize the iOS and Android StatusBar.
* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-splashscreen** - This plugin is required to work with splash screens. This plugin displays and hides a splash screen during application launch.
* **cordova-plugin-ionic-webview** - The Web View plugin for Cordova that is specialized for Ionic apps.
* **cordova-plugin-ionic-keyboard** - It provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.

## Documentation
* [Ionic Stencil Essential Guide](https://docs.google.com/document/d/1Hm1600nknT2uOUQ3d7pDQMiAdI7sdCHW3aM8vFazUC0/edit?usp=sharing)

## Changelog
```
1.1 - Dec 12, 2018
- Create "Selectors" page
- Create "Dropdowns" page
- Create "Toggle and Sliders" page
- Create "Inputs and Validation" page
- Create "Login with Background" page
- Create "Login with Footer" page
- Update app with Ionic 4 beta 17 and Angular 7.x 

1.0 - Nov 28, 2018
- Initial release
```

## Credits
* [Ionic Framework](http://ionicframework.com/)

## Third Party Licenses
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)
