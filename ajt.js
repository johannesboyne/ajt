(function () {
  var root = this, exports = {};

  exports = function ajt (url, template, callback) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onload = function (xmlHttpEvent) {
      callback(templatizer[template](JSON.parse(xmlHttpEvent.target.response)));
      console.log(xmlHttpEvent.target.response);
    };
    xmlHttpRequest.onerror = function (xmlHttpEvent) {
      console.log('error');
    };
    xmlHttpRequest.open('GET', url, true);
    xmlHttpRequest.send();
  };

  // attach to window or export with commonJS
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
      module.exports = exports;
  } else if (typeof define === "function" && define.amd) {
      define(exports);
  } else {
      root.ajt = exports;
  }

})();