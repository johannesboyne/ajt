# How to use this example

This is a very simple example. You can use it to get a feeling for different `ajt` approaches.

## 1st of all, the tests

Run `npm test` **before** you change anything here :) the test suite should pass.

## 2nd running the CLI

Delete the `example/myoutput.js` file because this is the one you want to reproduce next.

```shell
$ ajt -t example/jadeTemplates -t example/moreTemplates -o example/myoutput.js
```

It should have been recreated and you should be able to start the testServer:

```shell
$ node testServer.js
```

The other used local "echo" server is: [https://github.com/johannesboyne/echojson](https://github.com/johannesboyne/echojson)