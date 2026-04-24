const React = require("react");
const { AppRouter } = require("./router");
require("./index.css");

function App() {
    return <AppRouter />;
}

module.exports = App;
module.exports.default = App;