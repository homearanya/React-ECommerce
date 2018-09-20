import React from "react";
import { Link } from 'react-router-dom';


const Page404 = () => (
    <div className="container">>
        <h2>Error 404: Invalid URL</h2>
        <p>Why not browsing our <Link to="/shop">shop</Link> for some goodies?</p>
    </div>
);

export default Page404;