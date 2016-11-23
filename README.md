<img src="build/background.png" align="right" />
# Ng2-Electron-Builder
> Electron boilerplate based on [angular.io](https://angular.io/), [angular-cli](https://cli.angular.io/), [electron-package](https://github.com/electron-userland/electron-packager),[electron-builder](https://github.com/electron-userland/electron-builder) to package a angular application into desktop application and creating installer wizard

## Note

Deployed and Tested under Win10. If you wish to collaborate test with other OS-Platforms.

This project is under development for integrate the news angular updates and include pro tips.

The angular-cli is now in beta, this project too.

If you wish to collaborate while the project is still young, check out [our issue list](https://github.com/vilarone/ng2-electron-builder/issues).
  

## Prerequisites

angular-cli for mor info please visit [angular-cli](https://github.com/angular/angular-cli)
```bash
npm install angular-cli -g
```

## Usage

```bash
#install
git clone https://github.com/vilarone/ng2-electron-builder.git
cd ng2-electron-builder
npm install

# run electron application
npm run electron
# package application
npm run package
# build intaller
npm run release

### add :prod for production minify (unglify)
npm run electron:prod
npm run package:prod
```


## File Estructure

Inportant file folders:

```
...
├── electron
│   └── […Electron main file and config application json…]
├── release
│   └── […the final electron-package & electron-builder generated files…]
├── src
│   └── […here you type your application…]
├── package.json
...
```

## Angular-CLI Development Server

### Generating and serving an Angular2 project via a development server

```bash
ng serve
# or
npm start
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Contribute

Contributions are always welcome!
Please read the [contribution guidelines](contributing.md) first.

## License

MIT