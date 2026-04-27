import React from "react";

import "./PageState.css";

function PageState({ title, text }) {
    return (
        <div className="page-state">
            <h2 className="page-state__title">{title}</h2>

            {text && <p className="page-state__text">{text}</p>}
        </div>
    );
}

export default PageState;