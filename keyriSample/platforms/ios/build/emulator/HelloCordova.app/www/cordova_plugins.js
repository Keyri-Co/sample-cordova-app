cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-keyri.CordovaKeyri",
      "file": "plugins/cordova-keyri/www/CordovaKeyri.js",
      "pluginId": "cordova-keyri",
      "clobbers": [
        "cordova.plugins.CordovaKeyri"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-add-swift-support": "2.0.2",
    "cordova-keyri": "0.0.2"
  };
});