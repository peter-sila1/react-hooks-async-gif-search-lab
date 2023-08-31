import React from 'react'

function GifList({ gifs }) {

    
    

    const list = gifs.map(gif => {
        return <li key={gif.id}>
            <img src={gif.images.original.url} alt={gif.title} />
        </li>
    })

  return (
    <ul>
        {list}
    </ul>
  )
}

export default GifList