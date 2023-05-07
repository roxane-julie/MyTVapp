import { Link } from "react-router-dom"

export function Result(props) {
    const {show} = props.details
    
    return(
        <div className="card mb-5">
            {/* //attention toutes les séries ne possèdent pas de miniatures
            //prévoir un rendu conditionnel  */}
            <img className="" src={show.image?.medium || 'http://vignette3.wikia.nocookie.net/lego/images/a/ac/No-Image-Basic.png/revision/latest?cb=20130819001030' } />
            <h2 className="">{show.name}</h2>

            <Link to={'show/'+show.id}>Voir les infos</Link>

        </div>
    )
}


