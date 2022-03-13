import React from "react";

function Loader() {
    return(
        <div className="spinner-grow mt-5 d-block mx-auto bg-info" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Loader;