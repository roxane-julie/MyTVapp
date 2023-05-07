import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { Actor } from "./components/Actor";
import { Link } from "react-router-dom";


export function Show() {
    const params = useParams()
    const[show, setShow] = useState([])
    const[actors, setActors] = useState([])

    useEffect(()=> {
        fetch('http://api.tvmaze.com/shows/'+ params.id + '?embed=cast')
        .then((response) => response.json())
        .then((data) => { 
            setShow(data)
            setActors(data._embedded.cast)
            });
    }, [params.id])

        
    const purify = DOMPurify.sanitize(show.summary)

    return(
        
        <div className="card">
            <h2>{show.name}</h2>
            <img src={show.image?.medium || 'http://vignette3.wikia.nocookie.net/lego/images/a/ac/No-Image-Basic.png/revision/latest?cb=20130819001030' } />
            <div dangerouslySetInnerHTML={{__html:purify}}></div>
           {
            actors.map((actor)=><Actor key={actor.id} det={actor} />)
        }
            
        </div>
    )
}



