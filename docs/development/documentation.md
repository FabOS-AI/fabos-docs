---
permalink: /docs/development/documentation/
---

# Documentation

This documentation is generated using the static site generator [VuePress](https://vuepress.vuejs.org) (Version 1) and is hosted via GitHub Pages.

## Writing documentation

### Prequsites

* node.js
* npm (or other package manager)

### Run & Write

Run the following command to clone the  [FabOS Docs](https://github.com/FabOS-AI/fabos-docs) repository and to install the necessary node.js dependencies:
```
git clone https://github.com/FabOS-AI/fabos-docs && cd fabos-docs && npm install
```

Run documentation:
```
npm run dev
```
It will start a webserver providing the local version of the documentation. When a file is changed or added, it should be automatically detected and the hosted documentation should be updated.

### Hints

* Add new content in the `docs` directory or an appropriate  sub-directory.
* New items in the sidebar or plugins can be added in the file `.vuepress/config.js`.