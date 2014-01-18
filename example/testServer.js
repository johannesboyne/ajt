var http = require('http');
var fs = require('fs');
var js = fs.readFileSync(__dirname + '/myoutput.js');

// TESTING ONLY
http.createServer(function (req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('<html><body><h1>hello world</h1><div id="placeholder"></div><div id="placeholder2"></div><script>'+js+'</script><script>'+
    'ajt("http://localhost:1337/%7Bvalue1:%20%22test%22,%20value2:%20%22var%20js%20=%20\'cool\'%22%7D", \'template1\', function (html) {document.getElementById(\'placeholder\').innerHTML = html;});'+
    'ajt("http://localhost:1337/%7Bhello:1%7D", \'template2\', function (html) {document.getElementById(\'placeholder2\').innerHTML = html;});'+
    '</script></body></html>');
}).listen(8080, 'localhost');

console.log('the testserver is running @ http://localhost:8080/');