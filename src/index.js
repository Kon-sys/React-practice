const React = require("react");
const ReactDOM = require("react-dom/client");
const { BrowserRouter } = require("react-router-dom");
const { Provider } = require("react-redux");

const App = require("./app/App").default;
const { store } = require("./app/store");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);