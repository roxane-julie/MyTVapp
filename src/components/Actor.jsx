import React from "react";
import { Link } from "react-router-dom";

export function Actor(props) {
    const actor = props.det 

    return (
       
        <div className="card mb-5">

            <h2>{actor.person.name}</h2>
               <img className="" src={actor.person.image?.medium || 'http://vignette3.wikia.nocookie.net/lego/images/a/ac/No-Image-Basic.png/revision/latest?cb=20130819001030' } />
        
            <Link to={'/cast/' + actor.person.id}><h2 className="">{actor.person.name}</h2></Link>
            
        </div>
        
    )
}