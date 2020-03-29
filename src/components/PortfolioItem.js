import React from "react";
import { Link } from 'react-router-dom';

const PortfolioItem = (props) => {
    const num=props.match.params.id;
    //console.log(typeof props.match.params.id);
   
    //conditionally returning 
    if (num == '93') {
    return (
     <div>
       <h4>Marc Márquez</h4>
        <p>Marc Márquez Alentà (born 17 February 1993) is a Spanish Grand Prix motorcycle road racer and one of the most successful motorcycle racers of all time with eight Grand Prix world championships to his name - six of which are in the premier MotoGP class. Márquez races for Honda's factory team since his MotoGP debut in 2013</p>
       
        <Link to="/portfolio">Go Back</Link>
        
        </div>
    );
  }
    
    else if (num == '35'){
        
        return (
     <div>
       <h4>Cal Crutchlow</h4>
        <p>Cal Crutchlow (born 29 October 1985) is a British professional motorcycle road racer, who competes in the MotoGP World Championship for Team LCR. In early 2017, the RAC awarded Crutchlow the Torrens Trophy, an accolade made in recognition of "outstanding contribution to motorcycling in the United Kingdom". When making the award, the RAC spokesperson cited "the first Brit to win a premier class race since Barry Sheene in 1981"</p>
        
        <Link to="/portfolio">Go Back</Link>
        
        </div>
    );
        
        
        
    }
  
     
}

export default PortfolioItem;