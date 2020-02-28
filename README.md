# Kras !!!

Das Projekt setzt sich dabei aus mehreren Modulen zusammen:
* **cras** - Dieses Projekt stellt ein responsives Angular Frontend bereit
* **[cras](https://github.com/jenszech/cras)** - stellt das benötigte Backend bereit
* Optional **[crasBadgeIt](https://github.com/jenszech/crasBadgeIt)** - Ein microcontroller projekt for small ePaper devices
* Optional **[crasAndroidViewer](https://github.com/jenszech/crasAndroidViewer)** - Eine Android App mit einem einfachem fullscreen Webviewer

## Features

* Gesamtübersicht aller Meetingräume und ihrer Ausstattung
* Tasgesdetail Ansicht eine Meetingraums

### Roadmap

* Spontane Schnellbuchung eines Raums
* Filtern/Suchen der Räume nach bestimmten Eigenschaften
* Bessere Raum Detailinformation (Telefon, etc.)
* Tagesübersicht über alle Räume hinweg
* Legende für die Eigenschaften
 
   
Für geplante Features und Änderungen siehe [CHANGELOG.md](CHANGELOG.md)
     
## Getting Started

Diese Anleitung zeigt anhand einer Beispiel Installation auf dem Raspberry wie die das Frontend installiert, eingerichtet und betrieben werden kann.

### Prerequisites

* Linux umgebung (z.B Raspberry Pi 3 mit Raspbian)
* git
* node.js

siehe: [Raspberry Setup](https://github.com/jenszech/cras/wiki/System-setup-on-Raspberry-Pi-example)

### Installation
#### Installation des crasUI Projekts
```
git clone https://github.com/julienP88/kras.git
cd kras
npm install
```

#### Installation eines Angular WebServers
```
sudo npm install -g angular-http-server
```

#### Einrichten als Hintergrundprocess
Einrichten als Process mit Autostart und start des http Server
```
sudo npm install pm2@latest -g
pm2 start angular-http-server --name crasFrontend -- -p 8080 --path release/kras/
pm2 startup systemd
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
pm2 list
```

### Betrieb
Das WebInterface: http://<YOUR IP>:8080

#### Server Status abfragen
```
pm2 list
```

#### Server neustarten
```
pm2 restart crasFrontend
```

#### Update der Projekt Software
```
cd kras
git pull
pm2 restart crasFrontend
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Built With

* [Node.js](https://nodejs.org)
* [PM2 Guideline](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04) für NodeJS Application auf Produktions Servern 

## Contributing

Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Jens Zech** - *Initial work* - [GitHub Profil](https://github.com/jenszech)
* **julienP88** - *Project Owner* - [GitHub Profil](https://github.com/julienP88)
* **Anna Utlik** - *Main contributor* - [GitHub Profil](https://github.com/anna-utlik)

See also the list of [contributors](https://github.com/julienP88/kras/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



##Weitere Infos:
[Wiki - Raspberry Setup](https://github.com/jenszech/cras/wiki/System-setup-on-Raspberry-Pi-example)

