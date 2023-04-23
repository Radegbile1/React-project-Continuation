import React from 'react'
import '../components/List.css'
import { useEffect, useState } from 'react'

const List = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch('https://swapi.dev/api/films/?format=json')
        .then((response) => response.json())
        .then((actualData) => {
            setData(actualData.results)
        })

    }, [])

  return (
    <div>
    <ul className='items'>
        {data && data.map((item) =>{
        return (
            <div className='itemsStyling'><li key={item.episode_id}>
                <p>{item.title}</p>
               <p> {item.release_date}</p>
               {item.opening_crawl}
              <p><a href='https://infolink'> more info </a></p> 
            </li>
            </div>
        )
})}
    </ul>
    </div>
  )
}

export default List