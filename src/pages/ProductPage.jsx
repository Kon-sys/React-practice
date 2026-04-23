const React = require("react");
const { useParams } = require("react-router-dom");

function ProductPage() {
    const { id } = useParams();

    return <h1>Product Page: {id}</h1>;
}

module.exports = ProductPage;
module.exports.default = ProductPage;