import { useState, useEffect } from "react"
import { Result } from './Result'


export function Search(){
    const [query, setQuery] = useState("")
    const [result, setResult] = useState([])

    useEffect(() =>{
        fetch('https://api.tvmaze.com/search/shows?q='+query)
        .then((response)=> response.json())
        .then((data) => setResult(data));
         
    }, [query])

return(
<>
<input type={'texte'} className="mb-5" onChange={(e) => setQuery(e.target.value)} value={query} />
{
    result.map((result)=><Result key={result.id} details={result} />)
}
</>)
}

