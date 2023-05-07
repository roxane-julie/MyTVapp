import React  from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Actor } from "./components/Actor";
import { Result } from "./components/Result";



export function Cast() {
    const params = useParams()
    const [shows, setShows] = useState([])
    const [actor, setActor] = useState([])
    

    useEffect(()=> {
        fetch('https://api.tvmaze.com/people/'+ params.id +'/castcredits?embed=show')
        .then((response) => response.json())
        .then((dat) => 
            setShows(dat))}, [shows])

    useEffect(()=> {
        fetch('https://api.tvmaze.com/people/'+ params.id +'?embed=castcredits')
        .then((response) => response.json())
        .then((data)=>setActor(data))
        ;
        }, [actor])

    return(
        <>
        <div className="card">
            
            <h2>{actor.name}</h2>
            <img src={actor.image?.medium || 'http://vignette3.wikia.nocookie.net/lego/images/a/ac/No-Image-Basic.png/revision/latest?cb=20130819001030' } />

            {
            shows.map((show)=><Result key={show._embedded.show.id} details={show._embedded} />)
        }

        </div>

        </>)
    
}
