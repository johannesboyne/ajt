# AJT (Ajax JSON Template)

How simple can it be to do an Ajax-Request, get JSON and put this into a template? Simple and lightweight: `3 KB`!

```javascript
ajt('http://yourapi.com/getjson', 'theTemplate', function (html) {
  document.getElementById('placeholder').innerHTML = html;
});
```

and your template is a vanillaJS compiled jade template `:)` - does that sound sweet? It does!

```jade
h2= value1
code= value2
```

That it, simple and intuitiv!

## Documentation

`ajt` is looking for three parameters, the `request URL`, the `templateID` and the `callback`. Everything else is done by `ajt.js`.

## Installation

`npm install -g ajt`

## Bundling

You can eitherway bundle it by using the node module, or the command line:

```javascript
var ajt = require('ajt');
var js = ajt(__dirname + '/jadeTemplates', './optionalOutputfilename.js');
// ...
```

```shell
$ ajt -t jadeTemplates -o myoutput.js
or
$ ajt -t jadeTemplates
```

You even can do:

```shell
$ ajt -t jadeTemplates -t moreTemplates -o myoutput.js
```

# Contributors

* [milafrerichs](https://github.com/milafrerichs) - he kind of had the idea ;)