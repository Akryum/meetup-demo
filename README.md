
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

Créer les fichiers de base :

```
src
- client.js
- index.html
- server.js
- imports
  - client
    - client.js
  - server
    - server.js
    - publications.js
  - lib
    - collections.js
    - methods.js
```
