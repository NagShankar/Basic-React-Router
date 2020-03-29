import React from "react";
import { Link, Route } from 'react-router-dom';


const Portfolio = ({match}) => (
<div>
   <h1>Portfolio</h1>
    <p>Information about few riders of HRC</p>
    <Link to={`${match.url}/93`} className="sublink">Marc Marquez</Link>
    <Link to={`${match.url}/35`} className="sublink">Cal Cruthlow</Link>
    
    
    
    </div>


);

export default Portfolio;