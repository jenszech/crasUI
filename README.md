# CRAS UI - <ins>C</ins>onference <ins>R</ins>oom <ins>A</ins>ssisting <ins>S</ins>ystem

[![Release](https://img.shields.io/github/release/jenszech/crasui.svg)](https://github.com/jenszech/crasui/releases/latest)
[![Issues](https://img.shields.io/github/issues/jenszech/crasui.svg)](https://github.com/jenszech/crasui/issues)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)


## Features

* Gesamtübersicht aller Meetingräume und ihrer Ausstattung
* Tasgesdetail Ansicht eine Meetingraums

### Roadmap

* CRAS auch ohne VPN erreichbar machen
    * Die Schnittstellen mit einem Auth verfahren und Token absichern
    * Speicherung und verwaltung der Tokens damit nicht täglich ein erneutes Login nötig ist
* Das Frontend mit einem Login und User erweitern
    * Cookie & Session Handling
* Weitere Features
    * Buchen eines Raumes unter eigenem Namen direkt aus CRAS
    * Anzeige auf der Raumübersicht ob der Raum aktuell frei ist
    * Tagesübersicht über alle Räume hinweg
    * Filtern/Suchen der Räume nach bestimmten Eigenschaften
    * Bessere Raum Detailinformation (Telefon, etc.)
    * Legende für die Eigenschaften
    * TopListen
        * Am häugisten gebuchte Räume
        * Nutzer die am häufigsten Termine überziehen
        * Nutzung der spontan Buchung
  
Für geplante Features und Änderungen siehe [CHANGELOG.md](CHANGELOG.md)

### Teilprojekte
Das Projekt setzt sich dabei aus mehreren Modulen zusammen:
* **crasUI** - Dieses Projekt stellt ein responsives React Frontend bereit
* **[cras](https://github.com/jenszech/cras)** - stellt das benötigte Backend bereit
* Optional **[crasBadgeIt](https://github.com/jenszech/crasBadgeIt)** - Ein microcontroller projekt for small ePaper devices
* Optional **[crasAndroidViewer](https://github.com/jenszech/crasAndroidViewer)** - Eine Android App mit einem einfachem fullscreen Webviewer

     
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
git clone https://github.com/jenszech/crasUI.git
cd crasUI
npm install
```

#### Einrichten als Hintergrundprocess
Einrichten als Process mit Autostart und start des http Server

```
npm build
sudo npm install pm2@latest -g
pm2 serve build 5000 --name "crasUI"
pm2 startup systemd
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
pm2 list
```

### Betrieb
Das WebInterface: http://<YOUR IP>:5000

#### Server Status abfragen
```
pm2 list
```

#### Server neustarten
```
pm2 restart crasUI
```

#### Update der Projekt Software
```
cd crasUI
git pull
pm2 restart crasUI
```

## Entwicklung
### lokales mock backend
Für die Entwicklung des Frontends kann es hilfreich sein unabhängige und verlässliche Antworten zu bekommen. Dafür besteht die Möglichkeit das verwendette Backend aus dem separaten "cras" Projekt zu mocken.
Die benötigten mocks liegen unter ./src/mocks/

```
npm run mock-backend
==> Mockserver serving mocks {verbose:true} under "src/mocks" at http://localhost:3001
```
Danach kann lokal auf die API zugegriffen werden:
* http://localhost:3001/rooms - Übersicht aller Räume
* http://localhost:3001/rooms/Raum_Curie@tde.thalia.de - Abrufen von Raumdetails
* http://localhost:3001/metaTypes - Liste aller unterstützten Raum Eigenschaften

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

## Built With

* [Node.js](https://nodejs.org)
* [PM2 Guideline](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04) für NodeJS Application auf Produktions Servern 

## Contributing

Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Jens Zech** - *Project owner* - [GitHub Profil](https://github.com/jenszech)
* **julienP88** - *Initial work* - [GitHub Profil](https://github.com/julienP88)
* **Anna Utlik** - *Main contributor* - [GitHub Profil](https://github.com/anna-utlik)

See also the list of [contributors](https://github.com/jenszech/crasUI/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

##Weitere Infos:
[Wiki - Raspberry Setup](https://github.com/jenszech/cras/wiki/System-setup-on-Raspberry-Pi-example)

