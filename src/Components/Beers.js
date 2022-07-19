import React, {useEffect, useState} from 'react'

const Beers = () => {

    const [beers, setBeers] = useState();

    const getBeers = () => {
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(data => setBeers(data))
    }

    useEffect(()=> getBeers(), [])

    return (
        <>
            {beers && beers.map((beer) => (
                <tr key={beer.name}>
                    <td>{beer.index}</td>
                    <td>{beer.name}</td>
                    <td>{beer.description}</td>
                    <td><img src={beer.image_url} height="200px" alt={beer.index}/></td>
              </tr>
            ))}
        </>  
    )
}

export default Beers
