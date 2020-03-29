import React from "react";
import { Link } from 'react-router-dom';


const Portfolio = () => (
<div>
   <h1>Portfolio</h1>
    <p>Information about few riders of HRC</p>
    <Link to="/portfolio/93" className="sublink">Marc Marquez</Link>
    <Link to="/portfolio/35" className="sublink">Cal Cruthlow</Link>
    
    
    
    </div>


);

export default Portfolio;