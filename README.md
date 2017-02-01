
```
meteor remove blaze-html-templates jquery
meteor add static-html akryum:vue-component
meteor npm i -S babel-runtime vue vue-meteor-tracker vue-router
meteor update
meteor update --all-packages
meteor npm i
meteor
```

Un peu de less ?

```
meteor add akryum:vue-less
```

Existe aussi pour sass, stylus, pug...

Créer les fichiers de base :

```
src
- client.js
- index.html
- server.js
- imports
  - client
    - client.js
    - components
      - App.vue
  - server
    - server.js
    - publications.js
  - lib
    - collections.js
    - methods.js
```

ESLint ?

```
meteor npm i -SD babel-eslint eslint eslint-config-standard eslint-plugin-html eslint-plugin-promise eslint-plugin-standard
```
