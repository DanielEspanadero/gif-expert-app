import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImatges] = useState([]);

    useEffect(() => {
        getGifs(category)
        .then( setImatges )
    }, [category]);

    return (
        <>
        <h3>{category}</h3>
        <div className='card-grid'>
            {
                images.map(img => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            };
        </div>
        </>
    )
}

export default GifGrid;