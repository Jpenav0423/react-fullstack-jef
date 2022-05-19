import React from 'react';
import {Link} from "react-router-dom";

function PageNotFound() {
  return (
    <div>
        <h1>ERROR 404 NOT FOUND :/ </h1>
        <h1>The resource requested could not be found on this server</h1>
        <h3>
            Go to Home: <Link to="/"> Home Page</Link>
        </h3>
    </div>
  )
}

export default PageNotFound;